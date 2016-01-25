'use strict';

var express = require('express');
var bodyParser = require('body-parser');
  
// require database data modeling
var mongoose = require('mongoose');

// Express Session allows us to use Cookies to keep track of
// a user across multiple pages. We also need to be able to load
// those cookies using the cookie parser
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Flash allows us to store quick one-time-use messages
// between views that are removed once they are used.
// Useful for error messages.
var flash = require('connect-flash');



// Use express and set it up
var app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// Connect to DB (for messing around in localhost)?
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:3000');



// Controllers 
var handleNewFoodController = require('./backend_controllers/handleNewFoodController.js');


// HTPP routes
// Access form data and Post
// app.post('/postNewFood',  function(req, res){
//   var food = new Food({
//     foodName: req.body.foodName,
//     foodId: req.body.foodId,
//     foodGroup: req.body.foodGroup,
//     answer: req.body.answer,
//     reasoning: req.body.reasoning,
//     servingSize: req.body.servingSize,
//     calories: req.body.calories,
//     totalFat: req.body.totalFat,
//     transFat: req.body.transFat,
//     saturatedFat: req.body.saturatedFat,
//     cholesterol: req.body.cholesterol,
//     protein: req.body.protein,
//     sodium: req.body.sodium,
//     carbohydrates: req.body.carbohydrates,
//     sugar: req.body.sugar,
//     fiber: req.body.fiber,
//     vegetarian: req.body.vegetarian,
//     glutenFree: req.body.glutenFree,
//     vegan: req.body.vegan,
//     nutFree: req.body.nutFree
//   });
//   // Save the food to the database
//     food.save(function(err, food){
//       if(err){
//         res.send(err);
//       }
//       else{
//         res.send(food);
//       }

//     });
//   });

app.post('/postNewFood', handleNewFoodController.postNewFood)

// Get All Foods
app.get('/getAllFood', function(req, res){
  Food.find({}, function(err, allFood){
    res.send(allFood);
  });
});

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
