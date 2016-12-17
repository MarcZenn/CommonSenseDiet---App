(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('ONNAService', ONNAService);

  /** @ngInject */
  // This service is essentially a promise and is called from search.controller.js and what is returned in the resolve is what gets access in the .then(). in search.controller.js
  function ONNAService($log,localStorageService, $q) {

    // service definition. Init Health Score and ONI.
    var service = {
      theAnswer: '',
      callONNA : callONNA,
      HealthScore: 100,
      ONI : ['Glucose (dextrose)', 'Cholesterol', 'Mercury', 'Sodium', 'Aspartic acid', 'Lactose', 'Sucrose', 'Tocopherol, gamma', 'Vitamin E (alpha-tocopherol)', 'Vitamin E, added', 'Tocopherol, delta', 'Theobromine', 'Dihydrophylloquinone', 'Alcohol, ethyl','Maltose', 'Galactose','Starch','Fatty acids, total trans-monoenoic', 'Fatty acids, total trans-polyenoic', 'Palm Oil', 'Yellow 5', 'Color Added', 'Lactic Acid', 'Corn syrup', 'Yellow 6', 'Blue 1']
    };

    return service;


    /* This is ONNA, our (Optima Nutrition Assurance Algorith).
     *
     * This function is essentially a promise, is called from search.controller.js and what is  returned in the resolve is what gets access in the .then(). in search.controller.js
    */
    function callONNA(data) {

      var deferred = $q.defer();

      if(data && localStorageService.isSupported) {
        // FIRST, clear current localStorage & sessionStorage
        localStorageService.clearAll();

        // SECOND, save food's nutritional data in sessionStorage
        localStorageService.set('foodData', data);

        // THIRD, define 4 primary sync functions and call asynchronously via forEach(array)? while not violating the DRY principle. Thse 4 Primary functions evaluate nutrients, calories, trans-fats, total sugar & impact the Health Score accordingly.
        var pointsDeducted = 0;

        var checkONI = function() {

          service.ONI.forEach( function() {
            pointsDeducted += 1;
          });

          // return number of points deducted.
          return pointsDeducted;
        }

        var checkKcals = function() {

          // return number of points deducted.
          return - 0;
        }

        var checkTransFats = function() {

          // return number of points deducted.
          return - 0;
        }

        var checkSugar = function() {

          // return number of points deducted.
          return - 0;
        }

        // FOURTH, define 2 secondary sync functions and later call asynchronously via forEach(array)? while not violating the DRY principle. Thse 4 Primary functions evaluate nutrients, calories, trans-fats, total sugar & impact the Health Score accordingly.
        var checkFoodGroup= function() {

          // return number of points deducted.
          return - 0;
        }

        var checkSomething = function() {

          // return number of points deducted.
          return - 0;
        }

        // FIFTH, Place all primary layers into array.
        var primaryLayers  = [checkONI, checkKcals, checkSugar, checkTransFats,checkFoodGroup,checkSomething];

        // SIXTH, define a timeout to call JS sync functions asynchronously. Please not that while we reference service.HealthScore here we aren't actually updating it in any way.
        var executeAsynchronously = function(functions) {
          // Set newScore back to 100 everytime this function is called to avoid newScore being added on top of newScore when user chains searches together without refreshing.
          var newScore = service.HealthScore;

          // call layers.
          functions.forEach(function(i) {
              newScore = newScore + i.call();
          });

          // Set our final answer to true or false based on the final Health Score and save to sessionStorage.
          if(newScore && newScore <= 69) {

            service.theAnswer = 'NO';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT, resolve promise
            deferred.resolve(service.theAnswer);

          } else {

            service.theAnswer = 'YES';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT, resolve promise
            deferred.resolve(service.theAnswer);
          }
        }

        // SEVENTH, call the timeout for asynchronous funcs.
        executeAsynchronously(primaryLayers);

      } else if (!localStorageService.isSupported) {

          // else if localStorage is not supported do some other stuff...
          $log.log('local storage is not supported');

          deferred.reject('local storage is not supported');
      }

      return deferred.promise;
    }
  }
})();
