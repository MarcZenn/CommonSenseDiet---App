(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('ONNAService', ONNAService);

  /** @ngInject */
  /* This is ONNA, our (Optimal Nutrition Assurance Algorithm).
   *
   * This function is essentially a promise, is called from search.controller.js and what is  returned in the resolve is what gets access in the .then(). in search.controller.js. The steps are as follows.
   *
   *
   * FIRST: clear current localStorage & sessionStorage
   * SECOND: save food's nutritional data in sessionStorage
   * THIRD: define 4 primary sync functions and call asynchronously via forEach(array)? while not violating the DRY principle. Thse 4 Primary functions evaluate nutrients, calories, trans-fats, total sugar & impact the Health Score accordingly.
   * FOURTH: define 2 secondary sync functions and later call asynchronously via forEach(array)? while not violating the DRY principle. Thse 4 Primary functions evaluate nutrients, calories, trans-fats, total sugar & impact the Health Score accordingly.
   * FIFTH: Place all primary layers into array.
   * SIXTH: define a timeout to call JS sync functions asynchronously. Please not that while we reference service.HealthScore here we aren't actually updating it in any way.
   * SEVENTH: call the timeout for asynchronous funcs.
   * EIGHT: return promise as resolved or not.
  */
  function ONNAService($log,localStorageService, $q) {

    // Service definition. Init Health Score, Calorie Spectrum, ONI & points deducted.
    var service = {
      theAnswer: '',
      callONNA : ONNA,
      HealthScore: 100,
      pointsDeducted: 0,
      ONI : ['Glucose (dextrose)', 'Cholesterol', 'Mercury', 'Sodium', 'Aspartic acid', 'Lactose', 'Sucrose', 'Tocopherol, gamma', 'Vitamin E (alpha-tocopherol)', 'Vitamin E, added', 'Tocopherol, delta', 'Theobromine', 'Dihydrophylloquinone', 'Alcohol, ethyl','Maltose', 'Galactose', 'Fructose', 'Starch',"Fatty acids, total trans-monoenoic", "Fatty acids, total trans-polyenoic", 'Palm Oil', 'Yellow 5', 'Color Added', 'Lactic Acid', 'Corn syrup', 'Yellow 6', 'Blue 1']
    };

    return service;

    function ONNA(data) {
      // make into promise
      var deferred = $q.defer();

      if(data && localStorageService.isSupported) {
        // FIRST step
        localStorageService.clearAll();

        // SECOND step
        localStorageService.set('foodData', data);

        // THIRD, step
        var checkONI = function() {
          service.ONI.forEach( function(oniNutrient) {
            data.report.food.nutrients.forEach(function(badNutrient) {
              if (oniNutrient == badNutrient.name) {
                service.pointsDeducted += 1;
              }
            });
          });
          $log.log(service.pointsDeducted + ' point lost due to dangerous nutrients');
          return - service.pointsDeducted; // return number of points deducted.
        }
        var checkKcals = function() {
          var energy = data.report.food.nutrients.filter(function(key) {
            if (key.name == 'Energy' && key.unit == 'kcal') {
              return key.value;
            }
          });
          if(energy[0].value <= 99) {
            // If total kCals is less than 3 digits long
            service.pointsDeducted = 1;
          } else if(energy[0].value >= 100) {
            // if total kCals is 3 digits or longer
            service.pointsDeducted = Math.round(energy[0].value / 100);
          }
          $log.log(service.pointsDeducted + ' point lost due to calories');
          return - service.pointsDeducted; // return number of points deducted.
        }
        var checkTransFats = function() {


          return - 0; // return number of points deducted.
        }
        var checkSugar = function() {


          return - 0; // return number of points deducted.
        }

        // FOURTH step
        var checkFoodGroup= function() {

          return - 0; // return number of points deducted.
        }
        var checkSomething = function() {


          return - 0; // return number of points deducted.
        }

        // FIFTH step
        var primaryLayers  = [checkONI, checkKcals, checkSugar, checkTransFats,checkFoodGroup,checkSomething];

        // SIXTH step
        var executeAsynchronously = function(functions) {
          // Set newScore back to 100 everytime this function is called to avoid newScore being added on top of newScore when user chains searches together without refreshing.
          var newScore = service.HealthScore;

          // call layers.
          functions.forEach(function(i) {
              newScore = newScore + i.call();
          });

          $log.log(newScore);
          // Set our final answer to true or false based on the final Health Score and save to sessionStorage.
          if(newScore && newScore <= 69) {

            service.theAnswer = 'NO';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT step success
            deferred.resolve(service.theAnswer);

          } else {

            service.theAnswer = 'YES';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT step fail
            deferred.resolve(service.theAnswer);
          }
        }

        // SEVENTH step
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
