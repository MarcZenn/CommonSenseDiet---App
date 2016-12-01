(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('answerService', answerService);

  /** @ngInject */
  // This particular service is being treated like a constructor and is essentially returning an instance of our API data once defined.
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

        // Save data to localstorage here inside service and set to service.foodInfo






      }
    }

  }
})();
