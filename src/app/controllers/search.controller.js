(function() {
  'use strict';

  // TODO:: employ pagination.
  // TODO:: Each card must have an onclick that results in a final API call for that specific food (based on the UUID) Not sure if that will be in a seperate controller yet..

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document, $log, $scope, getSearchResults){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.searchresultsarray = [];

    // Get data from get getSearchResults.service.js API call and set to scope. Be sure to check that data exists first.
    vm.activate = function(searchterm) {
      return getSearchResults.getSearchResultsList(searchterm).then(function(data) {
        if(data.list.item) {
          vm.searchresultsarray = data.list.item;
          $log.log(data);
          return vm.searchresultsarray;
        }

      });
    }

  }
})();
