(function() {
  'use strict';

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module. This makes it available to the rest of the app.
  angular
    .module('commonSenseDietApp')
    .factory('getNutritionalData', getNutritionalData);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app via global templating.
  function getNutritionalData($log, $http) {

    // Here we define a service and a method function and access our API variables from .env.
    var service = {
      getSearchResultNutritionData: getSearchResultNutritionData
    }

    return service;

    // Here we define the service's main functionality. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getSearchResultNutritionData(id) {

      // Here we hit our Node server which will hit the NDB search API using our .env variables but not without concatenating our search query and our API key. We utilize an angular try-catch and depending on if successful or not we display error or return the data to search.contrller.js. For a list of all query parameters and settings visit - https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md
      return $http.get('/api/getNutritionalData/' + id)
          .then(returnNutritionalData)
          .catch(getNutritionalDataFail);

      function returnNutritionalData(response) {
        return response.data;
      }

      function getNutritionalDataFail(err) {
        return $log.error(err.data);
      }
    }
  }
})();
