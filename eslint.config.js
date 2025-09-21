import config from 'eslint-config-watchlar2000-js';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...config,
  prettierConfig,
  {
    // files: ['.eleventy.js', 'eleventy.config.js', '_11ty/**/*.js'],
    // rules: {
    //   'no-magic-numbers': 'off',
    //   'unicorn/prefer-module': 'off',
    // },
  },
  {
    ignores: [
      '_site/**',
      'node_modules/**',
      '**/*.njk',
      '**/*.html',
      'public/**',
      '.cache/**',
    ],
  },
];
