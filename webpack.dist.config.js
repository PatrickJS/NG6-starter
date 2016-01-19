var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output = {
  filename: 'bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'window', 'exports', 'require', 'moment', 'angular']
    }
  })
]);

module.exports = config;
