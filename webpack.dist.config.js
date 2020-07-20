const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

config.optimization = {
  ...config.optimization,
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      sourceMap: false,
      extractComments: true,
      terserOptions: {
        compress: {
          passes: 5,
        },
      },
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist'),
};

module.exports = config;
