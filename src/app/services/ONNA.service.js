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
      ONI : ['Glucose (dextrose)', 'Cholesterol', 'Mercury', 'Sodium', 'Aspartic acid', 'Sucrose', 'Tocopherol, gamma', 'Vitamin E, added', 'Tocopherol, delta', 'Theobromine', 'Dihydrophylloquinone', 'Alcohol, ethyl','Maltose', 'Galactose', 'Fructose', 'Starch',"Fatty acids, total trans-monoenoic", "Fatty acids, total trans-polyenoic", 'Palm Oil', 'Yellow 5', 'Color Added', 'Lactic Acid', 'Corn syrup', 'Yellow 6', 'Blue 1']
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
          service.ONI.forEach(function(oniNutrient) {
            data.report.food.nutrients.forEach(function(badNutrient) {
              if (oniNutrient == badNutrient.name) {
                service.pointsDeducted += 1;
                $log.log(oniNutrient);
              }
            });
          });
          $log.log(service.pointsDeducted + ' points lost due to dangerous nutrients');
          return - service.pointsDeducted; // return number of points deducted.
        }
        var checkKcals = function() {
          var kCals = data.report.food.nutrients.filter(function(key) {
            if (key.name == 'Energy' && key.unit == 'kcal') {
              return key.value;
            }
          });
          if(kCals[0].value <= 99) {
            // if total kCals is less than 3 digits long
            service.pointsDeducted = 1;
          } else if(kCals[0].value >= 100) {
            // if total kCals is 3 digits or longer
            service.pointsDeducted = Math.round(kCals[0].value / 100);
          }
          $log.log(service.pointsDeducted + ' points lost due to calories');
          return - service.pointsDeducted;
        }
        var checkTransFats = function() {
          var transFats = data.report.food.nutrients.filter(function(key) {
            if (key.name == 'Fatty acids, total trans') {
              return key.value;
            }
          });
          if (transFats.length) {
            service.pointsDeducted = transFats[0].value / .1 * 2;
          } else {
            service.pointsDeducted = 0;
          }
          $log.log(service.pointsDeducted + ' points lost due to trans fats');
          return - service.pointsDeducted;
        }
        var checkSugar = function() {
          var sugar = data.report.food.nutrients.filter(function(key) {
            if (key.name == 'Sugars, total') {
              return key.value;
            }
          });
          if (sugar.length) {
            service.pointsDeducted = sugar[0].value / 1 * 1.5;
          } else {
            service.pointsDeducted = 0;
          }
          $log.log(service.pointsDeducted + ' points lost due to sugar');
          return - service.pointsDeducted;
        }

        // FOURTH step
        var checkFoodGroup= function() {
          if(data.report.food.fg == 'Sweets' || data.report.food.fg == 'Fast Foods') {
            service.pointsDeducted = 10;
          }
          $log.log(service.pointsDeducted + ' points lost due to food group');
          return - service.pointsDeducted;
        }

        // FIFTH step
        var evaluators  = [checkONI, checkKcals, checkSugar, checkTransFats, checkFoodGroup];

        // SIXTH step
        var executeAsynchronously = function(functions) {
          // Set newScore back to 100 everytime this function is called to avoid newScore being added on top of newScore when user chains searches together without refreshing.
          var finalScore = service.HealthScore;

          // get final health score
          functions.forEach(function(i) {
              finalScore = finalScore + i.call();
          });

          $log.log(finalScore);
          // Set our final answer to true or false based on the final Health Score and save to sessionStorage.
          if(finalScore && finalScore <= 69) {

            service.theAnswer = 'NO';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT step NO answer
            deferred.resolve(service.theAnswer);

          } else {

            service.theAnswer = 'YES';
            localStorageService.set('answer', service.theAnswer);

            // EIGHT step YES answer
            deferred.resolve(service.theAnswer);
          }
        }

        // SEVENTH step
        executeAsynchronously(evaluators);

      } else if (!localStorageService.isSupported) {

          // else if localStorage is not supported do some other stuff...
          $log.log('local storage is not supported');

          deferred.reject('local storage is not supported');
      }

      return deferred.promise;
    }
  }
})();
