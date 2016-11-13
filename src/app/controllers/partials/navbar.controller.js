(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
    angular
      .module('commonSenseDietApp')
      .controller('NavbarController', NavbarController)

      /** @ngInject */
      function NavbarController(moment) {
        var vm = this;

        // "vm.creation" is avaible by directive option "bindToController: true"
        vm.relativeDate = moment(vm.creationDate).fromNow();
      }
})();
