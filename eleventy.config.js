import fs from 'node:fs';

import Image from '@11ty/eleventy-img';
import fontAwesomePlugin from '@11ty/font-awesome';

const svg = (path, className = '') => {
  const svgContent = fs.readFileSync(path, 'utf8');

  if (className) {
    return svgContent.replace('<svg', `<svg class="${className}"`);
  }

  return svgContent;
};

const image = async (
  source,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
) => {
  try {
    const metadata = await Image(source, {
      formats: ['webp', 'jpeg'],
      outputDir: './_site/assets/img/generated/',
      urlPath: '/assets/img/generated/',
      widths: [300, 600, 900, 1200],
    });

    const lowsrc = metadata.jpeg[0];
    const highsrc = metadata.jpeg.at(-1);

    return `<picture class="${className}">
      ${Object.values(metadata)
        .map((imageFormat) => {
          return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat
            .map((entry) => entry.srcset)
            .join(', ')}" sizes="${sizes}">`;
        })
        .join('\n')}
        <img
          src="${lowsrc.url}"
          width="${highsrc.width}"
          height="${highsrc.height}"
          alt="${alt}"
  >
    </picture>`;
  } catch {
    return `<img src="${source}" alt="${alt}">`;
  }
};

const themeImage = async (lightSource, darkSource, alt, sizes = '100vw') => {
  try {
    // Process both variants
    const [lightMetadata, darkMetadata] = await Promise.all([
      Image(lightSource, {
        formats: ['webp', 'jpeg'],
        outputDir: './_site/assets/img/generated/',
        urlPath: '/assets/img/generated/',
        widths: [300, 600, 900, 1200],
      }),
      Image(darkSource, {
        formats: ['webp', 'jpeg'],
        outputDir: './_site/assets/img/generated/',
        urlPath: '/assets/img/generated/',
        widths: [300, 600, 900, 1200],
      }),
    ]);

    const lightLowsrc = lightMetadata.jpeg[0];
    const lightHighsrc = lightMetadata.jpeg.at(-1);

    return `<picture>
${Object.values(darkMetadata)
  .map((imageFormat) => {
    return `<source media="(prefers-color-scheme: dark)" type="${imageFormat[0].sourceType}" srcset="${imageFormat
      .map((entry) => entry.srcset)
      .join(', ')}" sizes="${sizes}">`;
  })
  .join('\n')}
${Object.values(lightMetadata)
  .map((imageFormat) => {
    return `<source media="(prefers-color-scheme: light)" type="${imageFormat[0].sourceType}" srcset="${imageFormat
      .map((entry) => entry.srcset)
      .join(', ')}" sizes="${sizes}">`;
  })
  .join('\n')}
  <img
    src="${lightLowsrc.url}"
    width="${lightHighsrc.width}"
    height="${lightHighsrc.height}"
    alt="${alt}"
    >
</picture>`;
  } catch {
    return `<img src="${lightSource}" alt="${alt}">`;
  }
};

const eleventyConfig = (config) => {
  config.addShortcode('image', image);
  config.addShortcode('themeImage', themeImage);
  config.addShortcode('svg', svg);

  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });

  config.addPassthroughCopy('public');
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/styles/styles.css');

  config.addPlugin(fontAwesomePlugin, {
    shortcode: 'icon',
    transform: false,
  });

  config.addWatchTarget('src/styles/');
  config.addWatchTarget('src/images/');

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: '_site',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};

export default eleventyConfig;
