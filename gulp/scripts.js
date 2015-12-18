'use strict';

var path = require('path');
var gulp = require('gulp');
// look up this plugin ./conf
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});
 
gulp.task('scripts', function() {
  return buildScripts();
});

// I need to understand what these pipes do to all the .js files within /app. Why is this
// called twice by the two tasks above? What calls each one of them. 
function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};
