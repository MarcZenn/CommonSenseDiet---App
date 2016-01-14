(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .config(routeConfig);

  // This function which is self-invoked handles all routing 
  // for all templates along with the controllers it requires. 
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $routeProvider
      .when('/about', {
        templateUrl: 'app/views/pages/about.html',
        controller: 'AboutController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      // The only way to navigate to this route is via the URL. No link leads to it. Auth in coming later
      $routeProvider
      .when('/submitNewFood', {
        templateUrl: 'app/views/pages/submitNewFood.html',
        controller: 'submitNewFoodController',
        controllerAs: 'submitNewFood'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
