import fontAwesomePlugin from '@11ty/font-awesome';
import nunjucks from 'nunjucks';

import {
  PATHS,
  postcssFilter,
  shortcodes,
  TEMPLATE_ENGINE,
} from './src/_config/config.js';

const eleventyConfig = (config) => {
  const {
    assets,
    images,
    includes,
    input,
    output,
    public: public_,
    styles,
  } = PATHS;

  for (const [name, function_] of Object.entries(shortcodes)) {
    config.addShortcode(name, function_);
  }

  const nunjucksEnvironment = nunjucks.configure([includes, styles], {
    autoescape: false,
    lstripBlocks: true,
    throwOnUndefined: true,
    trimBlocks: true,
  });
  config.setLibrary('njk', nunjucksEnvironment);

  config.addPassthroughCopy(public_);
  config.addPassthroughCopy(assets);

  config.addPlugin(fontAwesomePlugin, {
    shortcode: 'icon',
    transform: false,
  });

  config.addWatchTarget(styles);
  config.addWatchTarget(images);

  config.addNunjucksAsyncFilter('postcss', postcssFilter);

  return {
    dir: {
      input,
      output,
    },
    htmlTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    passthroughFileCopy: true,
  };
};

export default eleventyConfig;
