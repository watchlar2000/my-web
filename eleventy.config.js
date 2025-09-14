import fontAwesomePlugin from '@11ty/font-awesome';

const eleventyConfig = (config) => {
  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });

  config.addPassthroughCopy('public');
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/styles/styles.css');

  config.addPlugin(fontAwesomePlugin, {
    transform: false,
    shortcode: 'icon',
  });

  config.addWatchTarget('src/styles/');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};

export default eleventyConfig;
