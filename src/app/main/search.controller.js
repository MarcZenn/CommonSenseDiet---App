(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($timeout, $location, $rootScope, $http, $log){
    // this is using controllerAs syntax. same thing as $scope.
    var search = this;

    // $http.get('/api/allFoods')
    search.$watch('search', function() {
      fetch();
    })

    function fetch() {
      $log('mike sucks ass');
      console.log('ugh');
    }

  }
})();
