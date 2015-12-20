(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .config(routeConfig);

  // this function which is self-invoked handles all routing 
  // for all templates along with the controller it requires. 
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
