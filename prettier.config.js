const config = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  overrides: [
    {
      files: '*.njk',
      options: {
        parser: 'html',
      },
    },
  ],
};

export default config;
