'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';

let root = 'client';

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

const blankTemplates = path.join(__dirname, 'generator', 'component/**/*.**');

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
