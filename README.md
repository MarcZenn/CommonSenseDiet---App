# CommonSenseDiet- A Simple Web-App
Version 1.0 12/17/2015
CURRENTLY UNDER CONSTRUCTION



# What Is It?

The CommonSenseDiet website is the simplest way to know if a certain food or
dish is healthy for you (or not healthy for you) with a simple yes or no...thats it. Nothing more.
Simply look up your foods/meals and get a YES or NO response.

Eating right is simple...Don't eat junk.

While the developers of this project want to keep this app small, we are
eager to maintain a robust, collaborative, open-source code base.

# Requirements

* [Node](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Angular](https://angularjs.org/)
* [Gulp](http://gulpjs.com/)

# Installation

If you would like to contribute to our project please fork
this repository or clone it down locally using the GitHub clone link
provided. All pull requests will be reviewed by our team and we'll reach
out to you if we'd like to incorporate your work. :)

# Quickstart

Once you have the repo in your local machine simply run the following commands:

* If you don't have gulp installed globally run `npm install --global gulp`.
* run `npm install -g bower` to install bower globally if you don't already have it installed.
* run `npm install` to install the required dependencies and devdependencies.
* run `bower install` to install angular dependencies
* run `gulp serve` to launch a browser sync server on your source files
* run `gulp test` to run your unit tests with Karma in watch mode

# Directory Structure

At the moment this is highly subject to change but will updated regularly.  

```
.
├── api
│   ├── app.js
│   └── http
│       ├── controllers
│       │   ├── emailController.js
│       │   └── indexController.js
│       └── routes
│           └── web.js
├── bower.json
├── config.json
├── dist
│   ├── assets
│   │   ├── favicons.ico
│   │   └── images
│   │       ├── angular.png
│   │       ├── browsersync.png
│   │       ├── gulp.png
│   │       ├── jade.png
│   │       ├── jasmine.png
│   │       ├── karma.png
│   │       ├── node-sass.png
│   │       ├── protractor.png
│   ├── favicon.ico
│   ├── index.html
│   ├── maps
│   │   ├── scripts
│   │   └── styles
│   ├── scripts
│   └── styles
├── envpreconfig.js
├── gulp
│   ├── build.js
│   ├── conf.js
│   ├── e2e-tests.js
│   ├── inject.js
│   ├── markups.js
│   ├── scripts.js
│   ├── server.js
│   ├── styles.js
│   ├── unit-tests.js
│   └── watch.js
├── gulpfile.js
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── malarkey
│   │   │   │   ├── malarkey.directive.js
│   │   │   │   └── malarkey.directive.spec.js
│   │   │   ├── partials
│   │   │   │   ├── footer
│   │   │   │   │   └── footer.directive.js
│   │   │   │   └── navbar
│   │   │   │       ├── navbar.directive.js
│   │   │   │       └── navbar.directive.spec.js
│   │   │   └── search
│   │   │       └── search.directive.js
│   │   ├── controllers
│   │   │   ├── answer.controller.js
│   │   │   ├── contact.controller.js
│   │   │   ├── error404.controller.js
│   │   │   ├── main.controller.js
│   │   │   ├── main.controller.spec.js
│   │   │   ├── partials
│   │   │   │   ├── malarkey.controller.js
│   │   │   │   └── navbar.controller.js
│   │   │   └── search.controller.js
│   │   ├── factories
│   │   │   ├── getFoodNamesOnly.factory.js
│   │   │   ├── getFoodNamesOnly.service.spec.js
│   │   │   ├── getNutritionalData.factory.js
│   │   │   └── getSearchResults.factory.js
│   │   ├── index.config.js
│   │   ├── index.constants.js
│   │   ├── index.module.js
│   │   ├── index.route.js
│   │   ├── index.run.js
│   │   ├── index.scss
│   │   ├── modules
│   │   │   ├── config.js
│   │   │   └── underscore.module.js
│   │   ├── services
│   │   │   ├── ONNA.service.js
│   │   │   └── paginator.service.js
│   │   └── views
│   │       ├── components
│   │       │   └── primary-search.html
│   │       ├── errors
│   │       │   └── 404.html
│   │       ├── pages
│   │       │   ├── answer.html
│   │       │   ├── contact.html
│   │       │   ├── home.html
│   │       │   └── submitNewFood.html
│   │       ├── partials
│   │       │   ├── footer.html
│   │       │   └── navbar.html
│   │       └── static
│   │           ├── about.html
│   │           ├── how-it-works.html
│   │           ├── meet-ONNA.html
│   │           ├── privacy-policy.html
│   │           └── terms-of-use.html
│   ├── assets
│   │   └── images
│   ├── favicon.ico
│   ├── index.html
│   └── public
│       └── stylesheets
│           ├── Partials
│           │   ├── footer.scss
│           │   ├── malarkey.scss
│           │   ├── navbar.scss
│           │   └── paginator.scss
│           ├── about.scss
│           ├── answer.scss
│           ├── contactus.scss
│           ├── global-selectors.scss
│           ├── home.scss
│           ├── how-it-works.scss
│           ├── privacy-policy.scss
│           ├── search.scss
│           ├── terms-of-use.scss
│           └── variables.scss
└── user-guide.md

```

# Development Server

Our source code includes the awesome gulp-plugin BrowserSync as the development server.

This allows you to serve your web resources locally to be more reactive and be able to have features like automatic reload of your page when you make a modification.

# Live Reload Of Sources

When you launch your dev server with `gulp serve`, it will launch BrowserSync along with the file watching and pre-processing feature.

When gulp detects a change, it will send a reload command to Browser Sync. Depending on which files have changed (html/js or css) it will reload the whole page or just reload the css and keep your page context up.

# Developer User Guide

[A closer look at the features present in the source code for contributors](user-guide.md)
