var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, 'client', 'app/app.js')
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // },
  module: {
    rules: [
       {
         test: /\.js$/,
         exclude: [/app\/lib/, /node_modules/],
         loader: 'babel-loader'
       },
       {
         test: /\.html$/,
         loader: 'raw-loader'
       },
       {
         test: /\.(scss|sass)$/,
         loader: 'style-loader!css-loader!sass-loader'
       },
       {
         test: /\.css$/,
         loader: 'style-loader!css-loader'
       }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true,
      chunks: ['vendor', 'app']
    }),
  ]
};
