const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');

const inputOptions = {
  input: 'src/index.ts',
  plugins: [json(), babel(), resolve(), commonjs(), typescript(), terser()]
};

const outputOptions = {
  output: {
    file: 'dist/bundle.js',
    format: process.env.FORMAT || 'umd',
    name: 'bundle',
    sourcemap: true,
  }
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
