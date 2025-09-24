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
    src,
    styles,
  } = PATHS;

  for (const [name, function_] of Object.entries(shortcodes)) {
    config.addShortcode(name, function_);
  }

  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });

  config.addPassthroughCopy(public_);
  config.addPassthroughCopy(images);
  config.addPassthroughCopy(assets);

  config.addPlugin(fontAwesomePlugin, {
    shortcode: 'icon',
    transform: false,
  });

  config.addWatchTarget(styles);
  config.addWatchTarget(images);

  const nunjucksEnvironment = nunjucks.configure([includes, styles, src], {
    autoescape: false,
  });
  config.setLibrary('njk', nunjucksEnvironment);

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
