(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('answerService', answerService);

  /** @ngInject */
  // This particular service is being treated like a constructor and is essentially returning an instance of our API data once defined.
  function answerService($log,localStorageService, $q) {

    // service definition
    var service = {
      theAnswer: 'no',
      yesNoMaybeAlgorithm : yesNoMaybeAlgorithm,
      yesNoMaybePromise: yesNoMaybePromise
    };

    return service;

    // This uses angular's $q provider. $qProvider is a service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing. This function is essentially a promise, is called from search.controller.js and what is returned in the resolve is what gets access in the .then(). in search.controller.js
    function yesNoMaybePromise(data) {

      var deferred = $q.defer();

      if(data && localStorageService.isSupported) {
        // clear current localStorage & sessionStorage
        localStorageService.clearAll();

        // save food's nutritional data in sessionStorage
        localStorageService.set('foodData', data);

/*
 |-----------------------------------------------------------------------
 | TODO:: place algorithm here before saving the answer to localStorage
 |
 | yesNoMaybeAlgorithm().then(function() {
 |
 | });
 |-----------------------------------------------------------------------
*/

        // change to true once algorithm comes up with answer.
        service.theAnswer = 'yes';

        // save yes or no or maybe after algorithm comes up with an answer.
        localStorageService.set('answer', service.theAnswer);

        deferred.resolve(service.theAnswer);

      } else if (!localStorageService.isSupported) {

          // else if localStorage is not supported do some other stuff...
          $log.log('local storage is not supported');

          deferred.reject('local storage is not supported');
      }

      return deferred.promise;
    }

    function yesNoMaybeAlgorithm() {
      // get a "YES" a "NO" or a "MAYBE" string.
    }

  }
})();
