(function() {
  'use strict';
  // TODO:: Abstract  MalarkeyController out of the service.
  // TODO:: Figure out how to use a service to hit nutrition API data and display in Malarkey directive. Return 100 foods.
  // TODO:: Make entire site mobile.
  // TODO:: Figure out how to Hide NDB API key - make sure this is NOT public facing.
  // TODO:: Learn how to deploy this damn thing....
  // TODO:: Add Google Analytics and Adsense - will need privicy policy
  // TODO:: add copyright
  // TODO:: Develop algorithm to dictate if given food is good or bad for you. 

  angular
    .module('commonSenseDietApp', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr']);

})();
