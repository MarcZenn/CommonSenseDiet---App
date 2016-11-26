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
        redirectTo: '/'
      });

    // About Page
    $routeProvider
      .when('/about', {
        templateUrl: 'app/views/pages/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Disclaimer Page
    $routeProvider
      .when('/disclaimer', {
        templateUrl: 'app/views/pages/disclaimer.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Privacy Policy Page
    $routeProvider
      .when('/privacy-policy', {
        templateUrl: 'app/views/pages/privacy-policy.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Contact Us Page
    $routeProvider
    .when('/contact', {
      templateUrl: 'app/views/pages/contact.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

})();
