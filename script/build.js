const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

console.log('FORMAT', process.env.FORMAT)

const inputOptions = {
  input: 'src/index.js',
  plugins: [json(), babel()]
};

const outputOptions = {
  output: {
    file: 'dist/bundle.js',
    format: process.env.FORMAT || 'esm'
  }
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
