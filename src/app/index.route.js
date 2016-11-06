(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .config(routeConfig);

  // This function which is self-invoked handles all routing for all templates along with the controllers it requires. Using controller as syntax as well.
  function routeConfig($routeProvider) {
    // Home Page
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    // About Page
    $routeProvider
      .when('/about', {
        templateUrl: 'app/views/pages/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
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

    // The only way to navigate to this route is via the URL. No link leads to it yet. Auth in coming later...
    $routeProvider
    .when('/submitNewFood', {
      templateUrl: 'app/views/pages/submitNewFood.html',
      controller: 'submitNewFoodController',
      controllerAs: 'newFood'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

})();
