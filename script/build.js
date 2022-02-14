const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

console.log('babel', babel)
// see below for details on the options
const inputOptions = {
  input: 'src/index.js'
};
const outputOptions = {
  output: {
    file: 'dist/bundle.js',
    format: 'ems'
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
