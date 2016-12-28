/*----------------------------------------------------------------------------
         Express development server with Browser-Sync load capabilities.

                            - using ES5 syntax -

 ----------------------------------------------------------------------------
                      SERVE ASSETS LOCALLY W/ Browser-Sync

  Run the command below in your terminal to hotload and serve assets via gulp and Browser-Sync

  $ npm start

--------------------------------------------------------------------------- */

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var port = process.env.PORT || 8081;
var cors = require('cors');
var path = require('path');
// public routes
var routes = require('./http/routes/web.js');

// require database data modeling via mongoose
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

// Use Express and set it up
var app = express();
app.use(cors()); // use cors
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON
app.set('view engine', 'jade'); // set Jade as the view engine
app.set('views', __dirname + '/.././src/app/views'); // tell server where to find our views
app.use(express.static(__dirname + '/.././dist')); // tell our server where to find static assets
app.use('/bower_components', express.static(path.resolve('.././bower_components'))); // make sure bower components are installed.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
}); // enable cors

// get our index.html, our routes and render our Single Page Application.
app.use('/api', routes);


app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
