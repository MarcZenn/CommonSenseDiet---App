(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    // Home Page
    $routeProvider
    .when('/', {
      templateUrl: 'app/views/pages/home.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // About Page
    $routeProvider
    .when('/about', {
      templateUrl: 'app/views/static/about.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Terms of Use Page
    $routeProvider
    .when('/terms-of-use', {
      templateUrl: 'app/views/static/terms-of-use.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Privacy Policy Page
    $routeProvider
    .when('/privacy-policy', {
      templateUrl: 'app/views/static/privacy-policy.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Contact Us Page
    $routeProvider
    .when('/contact', {
      templateUrl: 'app/views/pages/contact.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Answer Page
    $routeProvider
    .when('/answer', {
      templateUrl: 'app/views/pages/answer.html',
      controller: 'AnswerController',
      controllerAs: 'vm'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // How It Works Page
    $routeProvider
    .when('/how-it-works', {
      templateUrl: 'app/views/static/how-it-works.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Algorithm Explainer Page
    $routeProvider
    .when('/meet-ONNA', {
      templateUrl: 'app/views/static/meet-ONNA.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });
  }
})();
