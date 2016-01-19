'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import WebpacDevServer from 'webpack-dev-server';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';

import colorsSupported from 'supports-color';

let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(__dirname, root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || 'localhost';

  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/dev-server',
    // application entry point
    paths.entry
  ];

  var server = new WebpacDevServer(webpack(config), {
    stats: {
      colors: true,
      chunks: false,
      modules: false
    },
    hot: true,
    lazy: false,
    contentBase: paths.output
  });
  server.listen(
    PORT,
    HOST,
    function(err) {
      if(err) {
        throw new gutil.PluginError("webpack-dev-server", err);
      }

      gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    }
  );
});

gulp.task('watch', ['serve']);

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', ['serve']);
