(function() {
  'use strict';

  // TODO::Convert this API call to make calls from food data API and not github contributors. Should not apply to search, only to the malarkey directive. Will also need to be renamed.

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module.
  angular
    .module('commonSenseDietApp')
    .factory('githubContributor', githubContributor);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app.
  function githubContributor($log, $http) {
    var apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

    // For a list of request parameters see - https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md
    var ndbAPIKey = 'http://api.nal.usda.gov/ndb/list?format=json&It=f&max=30&sort=n&api_key=oSZ9f2ly7gkJo0A7fcRtd9z6AEGJaXIgPhNM6lhV'

    // Here we define a service and define a config variable (apiHost) and a method function.
    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    // Here we define the service method. Notice we pass in 'limit' as an argument. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getContributors(limit) {
      // If no limit passed then just manually set limit to avoid function failure undefined.
      if (!limit) {
        limit = 30;
      }

      // Here we actually hit the API using our apiHost config variable but not without concatenating a limit integer. We utilize an angular try-catch and depending on if successful or not we display error or return data to our malarkey.directive.js controller.
      return $http.get(apiHost + '/contributors?per_page=' + limit)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      //
      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
