(function() {
  'use strict';

  // We can specify functions (Module Methods) to run at configuration and run time for a module by calling the config and run methods. These functions are injectable with dependencies(DI).
  angular
    .module('commonSenseDietApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
