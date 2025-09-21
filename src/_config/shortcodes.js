import fs from 'node:fs';

import Image from '@11ty/eleventy-img';

import { IMAGE_CONFIG } from './config.js';

const createSourceElement = ({ mediaQuery, sizes, sourceType, srcset }) => {
  const media = mediaQuery ? `media="${mediaQuery}"` : '';

  return `<source ${media} type="${sourceType}" srcset="${srcset}" sizes="${sizes}">`;
};

const formatSrcset = (imageFormat) =>
  imageFormat.map((entry) => entry.srcset).join(', ');

const imageMetadataMapper =
  (theme = '') =>
  (formatArray, sizes) =>
    createSourceElement({
      mediaQuery: theme ? `(prefers-color-scheme: ${theme})` : undefined,
      sizes,
      sourceType: formatArray[0].sourceType,
      srcset: formatSrcset(formatArray),
    });

const extractImageInfo = (metadata) => ({
  formats: Object.values(metadata),
  highSource: metadata.jpeg.at(-1),
  lowSource: metadata.jpeg[0],
});

const generateSources = (formats, mapper, sizes) =>
  formats.map((format) => mapper(format, sizes)).join('\n');

const processImage = async (source, imageConfig = IMAGE_CONFIG) =>
  await Image(source, imageConfig);

const createPictureElement = (
  className = '',
  sources,
  { alt, height, src, width },
) => `
    <picture class="${className}">
      ${sources}
      <img
        src="${src}"
        width="${width}"
        height="${height}"
        alt="${alt}"
      />
    </picture>`;

const imageMapper = imageMetadataMapper();
const darkImageMapper = imageMetadataMapper('dark');
const lightImageMapper = imageMetadataMapper('light');

const svg = (path, className = '') => {
  try {
    const svgContent = fs.readFileSync(path, 'utf8');

    if (className) {
      return svgContent.replace('<svg', `<svg class="${className}"`);
    }

    return svgContent;
  } catch (error) {
    console.error(error);

    return '';
  }
};

const image = async ({ alt, className = '', sizes = '100vw', source }) => {
  try {
    const metadata = await processImage(source);
    const { formats, highSource, lowSource } = extractImageInfo(metadata);
    const sources = generateSources(formats, imageMapper, sizes);

    return createPictureElement(className, sources, {
      alt,
      height: highSource.height,
      src: lowSource.url,
      width: highSource.width,
    });
  } catch {
    return `<img src="${source}" alt="${alt}">`;
  }
};

const themeImage = async ({
  alt,
  darkSource,
  lightSource,
  sizes = '100vw',
}) => {
  try {
    const [lightMetadata, darkMetadata] = await Promise.all([
      processImage(lightSource),
      processImage(darkSource),
    ]);

    const { formats: lightFormats } = extractImageInfo(lightMetadata);
    const {
      formats: darkFormats,
      highSource,
      lowSource,
    } = extractImageInfo(darkMetadata);

    const darkSources = generateSources(darkFormats, darkImageMapper, sizes);
    const lightSources = generateSources(lightFormats, lightImageMapper, sizes);

    return createPictureElement('', `${darkSources}\n${lightSources}`, {
      alt,
      height: highSource.height,
      src: lowSource.url,
      width: highSource.width,
    });
  } catch {
    return `<img src="${lightSource}" alt="${alt}">`;
  }
};

const shortcodes = {
  image,
  svg,
  themeImage,
};

export { shortcodes };
