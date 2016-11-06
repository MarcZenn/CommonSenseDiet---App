/**
 *  Welcome to the gulpfile!
 *  The gulp tasks are split across several files in the gulp directory
 *  because putting them all here would be silly.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./gulp/conf');
var wrench = require('wrench');
var config = require('./config.js');
var fs = require('fs');
var gulpNgConfig = require('gulp-ng-config');


/**
 *  Environment Constants for different environments (variables).
 *  This creates a global angular module at build which can be
 *  use to expose env variables across the app.
 *  (module included in main module as dependency)
 */
gulp.task('setenvconstants', function () {
  // first write the json file to pass into gulp.src
  fs.writeFileSync('./config.json',
    JSON.stringify(config)
  );
  gulp.src('./config.json')
  .pipe(gulpNgConfig('envconfig.module', {
    createModule: true
  }))
  .pipe(gulp.dest(path.join(conf.paths.src, '/app')))
});


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
