(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document, $scope, getSearchResults, $log, $location, $rootScope, getNutritionalData, ONNAService) {
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    /* For Search Results List -
     *
     * Called from search.directive.js upon ngkeyup event. It will take the search query and init a new API call to get a list of foods based on the search query from the view input then return an array of our results attached to the "view-model" as vm.searchresultsarray.
     */
    vm.search = function(searchterm) {

      return getSearchResults.getSearchResultsList(searchterm).then(function(data) {
        // hide search load spinner
        angular.element($document[0].querySelector('.loader')).addClass('not-visible');

        if(data && data.list) {

          vm.searchresultsarray = data.list.item;

          return vm.searchresultsarray;

        } else {

          vm.searchresultsarray = data.errors.error;

          return vm.searchresultsarray;
        }
      })
      .catch(function () {
        $log.log('Promised Failed');
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
          // send data to our backend algorithm for 'yes' or 'no'
          ONNAService.callONNA(vm.foodNutritionData).then(function(answer) {
            if(answer) {
              // We initialize the AnswerController when we redirect to its page answer.html. That controller will handle building our answer page and displaying food data from sessionStorage.
              return $location.path('answer');
            }
          })
          .catch(function(error) {
            $log.log(error);
          });

        } else {

          $log.log("could not get food's nutrition data from API");
        }
      })
      .catch(function(error) {
        $log.log(error);
      });
    }

  }

})();
