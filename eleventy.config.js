import fontAwesomePlugin from '@11ty/font-awesome';
import Image from '@11ty/eleventy-img';
import fs from 'node:fs';

const svg = (path, className = '') => {
  const svgContent = fs.readFileSync(path, 'utf8');

  if (className) {
    return svgContent.replace('<svg', `<svg class="${className}"`);
  }

  return svgContent;
};

const image = async (
  src,
  alt,
  className = '',
  sizes = '100vw',
  // loading = 'lazy',
) => {
  try {
    let metadata = await Image(src, {
      widths: [300, 600, 900, 1200],
      formats: ['webp', 'jpeg'],
      urlPath: '/assets/img/generated/',
      outputDir: './_site/assets/img/generated/',
    });

    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

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
  } catch (err) {
    console.error(`Image shortcode error for ${src}:`, err.message);
    return `<img src="${src}" alt="${alt}">`;
  }
};

const themeImage = async (lightSrc, darkSrc, alt, sizes = '100vw') => {
  try {
    // Process both variants
    const [lightMetadata, darkMetadata] = await Promise.all([
      Image(lightSrc, {
        widths: [300, 600, 900, 1200],
        formats: ['webp', 'jpeg'],
        urlPath: '/assets/img/generated/',
        outputDir: './_site/assets/img/generated/',
      }),
      Image(darkSrc, {
        widths: [300, 600, 900, 1200],
        formats: ['webp', 'jpeg'],
        urlPath: '/assets/img/generated/',
        outputDir: './_site/assets/img/generated/',
      }),
    ]);

    let lightLowsrc = lightMetadata.jpeg[0];
    let lightHighsrc = lightMetadata.jpeg[lightMetadata.jpeg.length - 1];

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
  } catch (err) {
    console.error(`Theme image error:`, err.message);
    return `<img src="${lightSrc}" alt="${alt}">`;
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
    transform: false,
    shortcode: 'icon',
  });

  config.addWatchTarget('src/styles/');
  config.addWatchTarget('src/images/');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};

export default eleventyConfig;
