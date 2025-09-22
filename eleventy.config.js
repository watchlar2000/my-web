import fontAwesomePlugin from '@11ty/font-awesome';

import { PATHS, shortcodes, TEMPLATE_ENGINE } from './src/_config/config.js';

const eleventyConfig = (config) => {
  const { images, input, output, public: public_, styles } = PATHS;

  for (const [name, function_] of Object.entries(shortcodes)) {
    config.addShortcode(name, function_);
  }

  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });

  config.addPassthroughCopy(public_);
  config.addPassthroughCopy(styles);
  config.addPassthroughCopy(images);

  config.addPlugin(fontAwesomePlugin, {
    shortcode: 'icon',
    transform: false,
  });

  config.addWatchTarget(styles);
  config.addWatchTarget(images);

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
