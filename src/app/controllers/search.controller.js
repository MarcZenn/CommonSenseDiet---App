(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document, $scope, getSearchResults, $log, getNutritionalData, $location, $rootScope, answerService) {
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.searchresultsarray = [];

    /* For Search Results Listing -
     *
     * Called from search.directive.js upon ngkeyup. It will take the search query and init a new API call to get a list of foods based on the search query from getSearchResults.service.js then set what gets returned to the "view-model" vm.
     */
    vm.activate = function(searchterm) {
      return getSearchResults.getSearchResultsList(searchterm).then(function(data) {
        // This check is flawed. Haven't been able to fix. Still working on it.
        if(data) {
          vm.searchresultsarray = data.list.item;

          return vm.searchresultsarray;
        } else {

          $log.log('....loading API results');
        }
      });
    }

    /* For Nutritional Breakdown Page -
     *
     * This is a click event handler for the primary-search.html template (ngclick).   * When a search result is clicked on, it will take that result's ID (ndbno) and init a new API call to grab the rest of the nutritional data for that specific food. It then takes that data and passes it to our algorithm service/sessionStorage service which returns a promise with a 'yes', 'no', or 'mabye' string for answer.controller.js to use.
     */
    vm.goToSearchResult = function(id) {

      vm.foodNutritionData = null;

      return getNutritionalData.getSearchResultNutritionData(id).then(function(data) {

        vm.foodNutritionData = data;

        if (vm.foodNutritionData) {
          // send data to service algorithm answer.service.js which will save the food's nutrition data to sessionStorage and return a promise.
          answerService.yesNoMaybePromise(vm.foodNutritionData).then(function(answer) {
            if (answer) {
              // We initialize the AnswerController when we redirect to its page answer.html. That controller will handle building our answer page and displaying food data from sessionStorage.
              return $location.path('answer');
            }
          });

        } else {

          $log.log("could not get food's nutrition data from API");
        }
      });
    }

  }

})();
