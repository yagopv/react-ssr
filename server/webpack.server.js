const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
  // Inform webpack that we are building a
  // bundle to nodeJS rather than for the browser
  target: 'node',

  // Tell webpack where is the entry point
  entry: './src/index.js',

  // Tell webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Avoid including node_modules in the bundle (Save some time in the bundling process)
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
