(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
    angular
      .module('commonSenseDietApp')
      .controller('MalarkeyController', MalarkeyController)


      /** @ngInject */
      function MalarkeyController($log, getFoodNamesOnly) {
        var vm = this;

        // this.contributors
        vm.foodnameslist = [];

        activate();

        function activate() {
          return getFoodNamesList().then(function() {
            $log.info('Activated Foods List');
          });
        }

        // I have no idea how this directive has access to getFoodNamesOnly.service.js..BUT I suspect it has to do with the fact that both this directive and the service are registered to the same angular module.('commonSenseDietApp'). i.e. "The service factory function generates the single object or function that represents the service to the rest of the application." - https://docs.angularjs.org/guide/services
        function getFoodNamesList() {
          return getFoodNamesOnly.getFoodNamesList(20).then(function(data) {
            vm.foodnameslist = data;
            return vm.foodnameslist;
          });
        }
      }

})();
