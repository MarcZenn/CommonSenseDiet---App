(function() {
  'use strict';

  // We can specify functions (Module Methods) to run at configuration and run time for a module by calling the config and run methods. These functions are injectable with dependencies(DI).
  angular
    .module('commonSenseDietApp')
    .run(runBlock);

  /** @ngInject */
  // $log is angular's console.log.
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
