var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var lodash  = require('lodash');

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

config.output = {
  filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'client')
};

module.exports = config;
