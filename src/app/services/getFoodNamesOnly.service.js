(function() {
  'use strict';

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module. This makes it available to the rest of the app.
  angular
    .module('commonSenseDietApp')
    .factory('getFoodNamesOnly', getFoodNamesOnly);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app.
  function getFoodNamesOnly($log, $http, devEnvironment) {

    // Here we define a service and define a config variable (apiHost) and a method function.
    var service = {
      ndbApiKey: devEnvironment.api_key,
      ndbApiUrl: devEnvironment.api_url,
      getFoodNamesList: getFoodNamesList
    };

    return service;

    // Here we define the service's main method. Notice we pass in 'limit' as an argument. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getFoodNamesList(limit) {
      // If no limit passed then just manually set limit to avoid function failure undefined.
      if(!limit) {
        limit = 30;
      }
      // Here we actually hit the API using our apiHost config variable but not without concatenating a limit integer and our API key. We utilize an angular try-catch and depending on if successful or not we display error getFoodNamesFail() or return data returnFoodNamesList() to our malarkey.directive.js controller. For a list of all request parameters visit - https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md
      return $http.get(service.ndbApiUrl + '/ndb/list?format=json&It=f' + '&max=' + limit + '&sort=n&offset=15&api_key=' + service.ndbApiKey)
          .then(returnFoodNamesList)
          .catch(getFoodNamesFail);


      function returnFoodNamesList(response) {
        return response.data;
      }

      function getFoodNamesFail(err) {
        // return $log.error(err.data);
        return console.log(err.headers);
      }
    }
  }
})();
