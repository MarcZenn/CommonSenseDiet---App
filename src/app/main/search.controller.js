(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($timeout, $location, $rootScope, $http, $log){
    // this is using controllerAs syntax. same thing as $scope.
    var search = this;

    // $http.get('/api/allFoods')
    // search.$watch('search', function() {
    //   fetch();
    // });

    function fetch() {
      $log('mike sucks ass');
      console.log('ugh');
    }

  }
})();
