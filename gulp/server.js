'use strict';

var path = require('path');
var port = process.env.PORT || 8080;
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync').create();
var browserSyncSpa = require('browser-sync-spa');
var util = require('util');
var proxyMiddleware = require('http-proxy-middleware');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;

function browserSyncInit(baseDir, browser) {

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init({
    startPath: '/',
    cors: true,
    browser: browser = browser === undefined ? 'default' : browser,
    proxy: 'http://localhost:8081',
    port: port
    // https: true
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]' // Only needed for angular apps
}));

// Run gulp tasks
gulp.task('serve', ['browser-sync','setenvconstants','watch'], function () {
  return;
});
gulp.task('browser-sync', ['nodemon'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});
gulp.task('serve:dist', ['setenvconstants','build'], function () {
  browserSyncInit(conf.paths.dist);
});
gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});
gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
gulp.task('nodemon', [], function(done) {
    var running = false;

    return nodemon({
      script: 'api/app.js',
      watch: ['api/**/*.*']
    })
    .on('start',function() {
      if (!running) {
        done();
      }
      running = true;
    })
    .on('restart', function() {
      setTimeout(function(){
        reload();
      }, 500);
    });
});
