(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('answerService', answerService);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). This particular service is being treated like a constructor and is essentially returning an instance of
  function answerService($log) {
    // Service definition
    var service = {
      foodInfo: '',
      addFoodNutritionData: addFoodNutritionData
    };

    return service;

    function addFoodNutritionData(data) {
      if(data) {
        service.foodInfo = data;
      }
    }

  }
})();
