(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('answerService', answerService);

  /** @ngInject */
  // This particular service is being treated like a constructor and is essentially returning an instance of our API data once defined.
  function answerService($log,localStorageService, $location, $rootScope) {
    // Service definition
    var service = {
      addFoodNutritionData: addFoodNutritionData
    };

    return service;

    function addFoodNutritionData(data) {
      // Save data to sessionstorage here inside service and broadcast event to $rootScope
      if(data) {
        if(localStorageService.isSupported) {
          // clear current localStorage & sessionStorage
          localStorageService.clearAll();

          // save food's nutritional data in sessionStorage(localStorage)
          localStorageService.set('foodData', data);

          // broadcast an event to all scopes
          $rootScope.$broadcast('LocalStorageModule.notification.setitem');

          return false;

        } // else if localStorage is not supported...


      }
    }

  }
})();
