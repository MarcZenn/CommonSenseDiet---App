(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
    angular
      .module('commonSenseDietApp')
      .controller('MalarkeyController', MalarkeyController)


      /** @ngInject */
      function MalarkeyController($log, getFoodNamesOnly) {
        // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures.
        var vm = this;

        vm.foodnameslist = [];

        activate();

        function activate() {
          return getFoodNamesList().then(function() {
            $log.info('Activated Foods List Typer');
          })
          .catch(function () {
            $log.log('Promised Failed');
          });
        }

        function getFoodNamesList() {
          return getFoodNamesOnly.getFoodNamesList(20).then(function(data) {
            vm.foodnameslist = data;

            return vm.foodnameslist ;
          })
          .catch(function () {
            $log.log('Promised Failed');
          });
        }
      }

})();
