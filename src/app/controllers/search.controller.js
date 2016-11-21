(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document, $scope, getSearchResults, $log){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.searchresultsarray = [];

    // Called from search.directive.js. Get data from getSearchResults.service.js API call and set to scope.
    vm.activate = function(searchterm) {
      return getSearchResults.getSearchResultsList(searchterm).then(function(data) {
        // Be sure to check that data exists first.
        if(data) {
          vm.searchresultsarray = data.list.item;

          return vm.searchresultsarray;
        } else {
          $log.log('....loading API results');
        }
      });
    }

  }
})();
