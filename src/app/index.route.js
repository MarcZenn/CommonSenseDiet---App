(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .config(routeConfig);

  // this function which is self-invoked handles all routing 
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
        controllerAs: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
