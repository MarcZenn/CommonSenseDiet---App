(function() {
  'use strict';

  // TODO::Convert this API call to make calls from food data API and not github contributors. Should not apply to search, only to the malarkey directive. Will also need to be renamed.

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module. This makes it available to the rest of the app.
  angular
    .module('commonSenseDietApp')
    .factory('githubContributor', githubContributor);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app.
  function githubContributor($log, $http) {

    // Must hide this!!
    var ndbApiKey = 'oSZ9f2ly7gkJo0A7fcRtd9z6AEGJaXIgPhNM6lhV'

    // Here we define a service and define a config variable (apiHost) and a method function.
    var service = {
      ndbApiKey: ndbApiKey,
      getFoodNamesList: getFoodNamesList
    };

    return service;


    // function getContributors(limit) {
    //   if (!limit) {
    //     limit = 30;
    //   }
    //
    //   // return $http.get(apiHost + '/contributors?per_page=' + limit)
    //   //   .then(getContributorsComplete)
    //   //   .catch(getContributorsFailed);
    //
    //   function getContributorsComplete(response) {
    //     return response.data;
    //   }
    //
    //   function getContributorsFailed(error) {
    //     $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
    //   }
    // }





    // Here we define the service method. Notice we pass in 'limit' as an argument. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getFoodNamesList(limit) {
      // If no limit passed then just manually set limit to avoid function failure undefined.
      if(!limit) {
        limit = 30;
      }

      // Here we actually hit the API using our apiHost config variable but not without concatenating a limit integer. We utilize an angular try-catch and depending on if successful or not we display error getFoodNamesFail() or return data returnFoodNamesList() to our malarkey.directive.js controller. For a list of request parameters see - https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md
      return $http.get('http://api.nal.usda.gov/ndb/list?format=json&It=f' + '&max=' + limit + '&sort=n&offset=15&api_key=' + ndbApiKey)
          .then(returnFoodNamesList)
          .catch(getFoodNamesFail);

      function returnFoodNamesList(response) {
        return response.data;
      }

      function getFoodNamesFail(err) {
        return $log.error(error.data);
      }
    }
  }
})();
