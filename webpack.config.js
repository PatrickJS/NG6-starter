const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const isProdMode = mode === 'production';

module.exports = {
  mode,
  devtool: mode !== 'production' ? 'source-map' : undefined,
  entry: {},
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules/],
        use: [
          'ng-annotate-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: {
                useShortDoctype: true,
                minifyJS: true,
                minifyCSS: true,
                removeScriptTypeAttributes: true,
                removeStyleTypeAttributes: true,
                removeComments: true,
                collapseWhitespace: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/, use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProdMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProdMode,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                //
              },
              sourceMap: !isProdMode,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProdMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProdMode,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(mode),
        NODE_ENV: JSON.stringify(mode),
      },
    }),

    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      templateParameters: {
        //
      },
      minify: isProdMode ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
      inject: 'body',
      hash: true,
      scriptLoading: 'defer',
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash].css',
      allChunks: false,
    }),
  ],
};
