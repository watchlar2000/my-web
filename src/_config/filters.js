import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';

const postcssFilter = (cssCode, done) => {
  postcss([postcssImport, autoprefixer, cssnano({ preset: 'default' })])
    .process(cssCode, {
      from: './src/styles/styles.css',
    })
    .then(
      (result) => done(null, result.css),
      (error) => done(error, null),
    );
};

export { postcssFilter };
