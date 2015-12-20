# CommonSenseDiet- A Simple Web-App 
Version 1.0 12/17/2015
CURRENTLY UNDER CONSTRUCTION



# What Is It?

The CommonSenseDiet website is the simplest way to know if a certain food or 
dish is healthy for you (or not healthy for you) with a simple yes or no...thats it. Nothing more. 
Simply look up your foods/meals and get a YES or NO response. 
While the developers of this project want to keep this simple, we are 
eager to maintin a robust, collaborative, open-source code base. 

# Requirements

* [Node](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Angular](https://angularjs.org/)
* [Jade](http://jade-lang.com/)
* [Gulp](http://gulpjs.com/)

# Installation

If you would like to contribute to our project please fork 
this repository or clone it down locally using the GitHub clone link 
provided. All pull requests will be reviewed by our team and we'll reach 
out to you if we'd like to incorporate your work. :) 

# Quickstart 

Once you have the repo in your local machine simply run the following commands: 

* run `npm install` to install the required dependencies and devdependencies.
* run `bower install` to install bower
* run `gulp serve` to launch a browser sync server on your source files
* run `gulp test` to run your unit tests with Karma in watch mode

# Directory Structure

At the moment this is highly subject to change but will updated regularly.  


```
├──  bower_components/
├──  e2e/
├──  gulp/
├──  nodes_modules/
│
├──  src/
│   ├──  app/
│   │   ├──  components/
│   │   │   └──  githubContributor/
│   │   │   │   └──  githubContributor.service.js
│   │   │   │
│   │   │   └──  malarkey/
│   │   │   │   ├──  malarkey.directive.js
│   │   │   │   └──  malarkey.(scss|styl|less|css)
│   │   │   │
│   │   │   └──  navbar/
│   │   │   │   ├──  navbar.directive.(js|ts|coffee)
│   │   │   │   ├──  navbar.html
│   │   │   │   └──  navbar.(scss|styl|less|css)
│   │   │   │
│   │   │   └──  webDevTec/
│   │   │       └──  webDevTec.service.js
│   │   │
│   │   ├──  main/
│   │   │   ├──  main.controller.(js|ts|coffee)
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  main.html
│   │   │
│   │   └──  index.config.(js|ts|coffee)
│   │   └──  index.constants.(js|ts|coffee)
│   │   └──  index.module.(js|ts|coffee)
│   │   └──  index.route.(js|ts|coffee)
│   │   └──  index.run.(js|ts|coffee)
│   │   └──  index.(scss|styl|less|css)
|   |
│   ├──  assets/
│   │   └──  images/
│   ├──  favico.ico
│   └──  index.html
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
└──  protractor.conf.js
```

# Development Server 

Our source code includes the awesome gulp-plugin BrowserSync as the development server.

This allows you to serve your web resources locally to be more reactive and be able to have features like automatic reload of your page when you make a modification.

# Live Reload Of Sources

When you launch your dev server with `gulp serve`, it will launch BrowserSync along with the file watching and pre-processing feature.

When gulp detects a change, it will send a reload command to Browser Sync. Depending on which files have changed (html/js or css) it will reload the whole page or just reload the css and keep your page context up.

# Developer User Guide

[A closer look at the features present in the source code for contributors](user-guide.md)

