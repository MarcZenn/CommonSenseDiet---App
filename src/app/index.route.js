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
      templateUrl: 'app/views/pages/about.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Disclaimer Page
    $routeProvider
    .when('/disclaimer', {
      templateUrl: 'app/views/pages/disclaimer.html'
    })
    .otherwise({
      controller: 'Error404Controller',
      templateUrl: 'app/views/errors/404.html'
    });

    // Privacy Policy Page
    $routeProvider
    .when('/privacy-policy', {
      templateUrl: 'app/views/pages/privacy-policy.html'
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

  }

})();
