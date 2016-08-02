'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import del      from 'del';
import notify   from 'gulp-notify';
import plumber  from 'gulp-plumber';
import sass     from 'gulp-sass';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import sourcemaps           from 'gulp-sourcemaps';
import autoprefixer         from 'gulp-autoprefixer';
import historyApiFallback   from 'connect-history-api-fallback';

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
  //styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: [
    'babel-polyfill',
    path.join(__dirname, root, 'app/app.js')
  ],
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

// Convert Sass to CSS
let buildSass = (rtl, dist) => {
  let dest, source, destPath;

  if (rtl) {
    source = './node_modules/rollcall-pattern-library/assets/sass/utils/rtl/rtl.scss';
    dest = 'rtl-style.css';
  } else {
    source = './node_modules/rollcall-pattern-library/assets/sass/utils/rtl/ltr.scss';
    dest = 'style.css';
  }

  if (dist) {
    destPath = paths.dest;
  } else {
    destPath = root;
  }

  gulp.src([source])
    .pipe(plumber({
      errorHandler: errorHandler
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths : [
        'node_modules/rollcall-pattern-library/bower_components/bourbon/app/assets/stylesheets',
        'node_modules/rollcall-pattern-library/bower_components/neat/app/assets/stylesheets'
      ],
      sourceComments: 'map'
    }))
    .pipe(autoprefixer())
    .pipe(plumber.stop())
  // .pipe(minifyCSS({keepBreaks:true}))
    .pipe(sourcemaps.write())
    .pipe(rename(dest))
    .pipe(gulp.dest(destPath))
    .pipe(notify('CSS compiled'))
    .pipe(notify({ title: 'CSS', message: 'CSS is compiled' }));
};

// error handler
let errorHandler = (err) => {
  gutil.beep();
  gutil.log(err.message || err);
  notify.onError('Error: <%= error.message %>')(err);
};

// use webpack.config.js to build modules
gulp.task('webpack', ['clean', 'ltr-dist', 'rtl-dist'], (cb) => {
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
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
  ].concat(paths.entry);

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: root},
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
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

/*
 * Convert LTR Sass files to CSS
 */
gulp.task('ltr', () => {
  buildSass(false, false);
});

/**
 * Convert RTL Sass files to CSS
 */
gulp.task('rtl', () => {
  buildSass(true, false);
});

/*
 * Convert LTR Sass files to CSS for distribution
 */
gulp.task('ltr-dist', () => {
  buildSass(false, true);
});

/**
 * Convert RTL Sass files to CSS for distribution
 */
gulp.task('rtl-dist', () => {
  buildSass(true, true);
});

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('default', ['ltr', 'watch']);
