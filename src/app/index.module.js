(function() {
  'use strict';

  // TODO:: fix serve.static from src issue!
  // TODO:: Pay for valid SSL Certificate when possible.
  // TODO:: Add Google Adsense - https://www.google.com/adsense/start/
  // TODO:: How to account for a true 'serving-size' per food?????
  // TODO:: write spec tests for all services, controllers and factories.
  // TODO:: Make a list of beta testers and send invites.
  // TODO:: 'variable-ize' css colors
  // TODO:: Update terms of use given KF
  // TODO:: Wait for mailgun domain dns updates to verify.
  // TODO:: Seek IP patent for algorithm once past beta testing.
  // TODO:: Consider switching Food Data provider to these guys - https://www.labelinsight.com/developers/pricing or these guys http://platform.fatsecret.com/api/Default.aspx?screen=prem

  angular
    .module('commonSenseDietApp', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'underscore', 'LocalStorageModule']);

})();
