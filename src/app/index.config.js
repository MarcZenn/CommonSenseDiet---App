(function() {
  'use strict';

  // We can specify functions (Module Methods) to run at configuration and run time for a module by calling the config and run methods. These functions are injectable with dependencies(DI).
  angular
    .module('commonSenseDietApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // $httpProvider.useApplyAsync(true);

    // For Access-Control-Allow-Origin and Set-Cookie header
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = 'Content-Type: application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }

})();
