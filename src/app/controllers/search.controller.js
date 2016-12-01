(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document, $scope, getSearchResults, $log, getNutritionalData){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.searchresultsarray = [];

    /* For Search Results Listing -
     *
     * Called from search.directive.js upon ngkeyup. It will take the search query and init a new API call to get data from getSearchResults.service.js and set what gets returned to the "view-model".
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
     * This is a click event handler for the primary-search.html template (ngclick). When a search result is clicked on it will take that result's ID (ndbno) and init a new API call to grab the rest of the nutritional data for that specific food.
     */
    vm.goToSearchResult = function(id) {

      return getNutritionalData.getSearchResultNutritionData(id).then(function(data) {
        // This check is flawed. Haven't been able to fix. Still working on it.
        if(data) {
          // send data to custom directive. use directive to fill page data.
          $log.log(data);
        } else {

          $log.log('....fail');
        }
      });
    }

  }
})();
