(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('AnswerController', AnswerController);


  function AnswerController($log, localStorageService){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    // Table of nutrients data report from NDB API
    vm.stored;
    vm.yesNoMaybe;

    vm.nutrientGroups = {
      proximates: false,
      minerals: false,
      vitamins: false,
      lipids: false,
      other: false,
      aminoAcids: false
    }

    // This gets called from the search.controller.js $rootScope listener and loads local storage data once and once only which is when the init click event occurs. The function below reloads the data once you're already on the page and happen to refresh.
    vm.getLocalStorageData = function() {
      // Retrieve data that answer.service.js saved into sessionStorage
      if(localStorageService.get('foodData')) {
        // Hold the entire report in vm.stored. Hold final answer in vm.yesNoMaybe.
        vm.stored = localStorageService.get('foodData');
        vm.yesNoMaybe = localStorageService.get('answer').split(/UPC:|gtin:/g)[0].replace(/\,/g,"").toLowerCase();

        // Check to see if chosen nutrient groups have nutrients listed under them aka exist in the data. If so then display in view.
        vm.stored.report.food.nutrients.forEach(function(nutrient) {
          switch (nutrient.group) {
            case "Proximates":
              vm.nutrientGroups.proximates = true;
              break;
            case "Minerals":
              vm.nutrientGroups.minerals = true;
              break;
            case "Vitamins":
              vm.nutrientGroups.vitamins = true;
              break;
            case "Lipids":
              vm.nutrientGroups.lipids = true;
              break;
            case "Other":
              vm.nutrientGroups.other = true;
              break;
            case "Amino Acids":
              vm.nutrientGroups.aminoAcids = true;
              break;
            default:
              break;
          }
        });





        $log.log(vm.stored.report);
        $log.log(vm.yesNoMaybe);

      } else {

        $log.log('No data in localStorage or sessionStorage!');
      }
    };

    vm.getLocalStorageData();
  }
})();
