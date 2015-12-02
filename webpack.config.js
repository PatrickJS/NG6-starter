
module.exports = {
  devtool: 'sourcemap',
   entry: [
      // Set up an ES6-ish environment
      'babel-polyfill',
      // Add your application's scripts below
      './client/app/app.js'
   ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       {
          test: /\.js$/,
          exclude: [/app\/lib/, /node_modules/],
          loader: 'ng-annotate!babel'
       },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
