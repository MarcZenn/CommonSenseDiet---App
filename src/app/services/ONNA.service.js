(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('ONNAService', ONNAService);

  /** @ngInject */
  /* This is ONNA, our (Optimal Nutrition Assurance Algorithm).
   *
   * This function calls our ONNA algorithm in the backend and receives a final answer in response. We use localStorage since we have no proper DB yet. The Logic goes as follows:
   *
   *
   * FIRST : clear current localStorage & sessionStorage in case they're storing.
   * SECOND: save our food's nutritional data in sessionStorage. Then make our API call.
   * THIRD : define 4 primary sync functions, 2 secondary and call while not violating the DRY principle. These evaluate nutrients, calories, trans-fats, total sugar, trans-fats, total sugar.
   * SIXTH : define a timeout to call JS sync functions asynchronously.
   * EIGHT : return answer and set to localStorage
  */
  function ONNAService($log,localStorageService,$http) {

    var service = {
      callONNA : ONNA
    };

    return service;

    function ONNA(data) {

      if(data && localStorageService.isSupported) {

        localStorageService.clearAll();
        localStorageService.set('foodData', data);

      } else if(!localStorageService.isSupported) {

        $log.log('local storage is not supported');
      }

      return $http.post('/api/ONNA/', data)
          .then(returnAnswer)
          .catch(algorithmFail);


      function returnAnswer(response) {
        localStorageService.set('answer', response.data);
        return response.data;
      }

      function algorithmFail(err) {
        return $log.error(err.data);
      }
    }
  }
})();
