(function() {
  'use strict';

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module. This makes it available to the rest of the app.
  angular
    .module('commonSenseDietApp')
    .factory('getSearchResults', getSearchResults);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app via global templating.
  function getSearchResults($log, $http, devEnvironment) {

    // Here we define a service and a method function and access our API variables from .env.
    var service = {
      ndbApiKey: devEnvironment.api_key,
      ndbApiUrl: devEnvironment.api_url,
      getSearchResultsList: getSearchResultsList
    };

    return service;

    // Here we define the service's main functionality. Notice we pass in 'limit' as an argument. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getSearchResultsList(searchterm) {

      // Here we hittind the NDB search API using our .env variables but not without concatenating our searchterm query and our API key. We utilize an angular try-catch and depending on if successful or not we display error or return the data to search.contrller.js. For a list of all query parameters and settings visit - https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md
      return $http.get(service.ndbApiUrl + '/ndb/search/?format=json&q=' + searchterm + '&sort=n&api_key=' + service.ndbApiKey)
          .then(returnSearchResultsList)
          .catch(getSearchResultsList);


      function returnSearchResultsList(response) {
        return response.data;
      }

      function getSearchResultsList(err) {
        return $log.error(err.data);
      }
    }
  }
})();
