(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope) {
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures.
    var vm = this;


    vm.classAnimation = '';
    vm.creationDate = 1450389822870;

    activate();
    // this timeout needs to be canceled!
    function activate() {
      $timeout(function() {
        vm.classAnimation = 'pulse';
      }, 10000);
    }

    $scope.$on('$destroy', function () {
      $timeout.cancel(activate)
    });
  }
})();
