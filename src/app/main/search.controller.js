(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function AboutController($timeout, $location, $rootScope, $http){
    // this is using controllerAs syntax. same thing as $scope.
    var search = this;

    $http.get('/api/allFoods')

  }
})();
