(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('answerService', answerService);

  /** @ngInject */
  // This service is essentially a promise and is called from search.controller.js and what is returned in the resolve is what gets access in the .then(). in search.controller.js
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
 | TODO:: place cal to algorithm here before saving the answer to localStorage
 |
 | yesNoMaybeAlgorithm().then(function() {
 |
 |  - Determine a list of the top 50 worst nutritional datapoints for you
 |    and a list of the top 50 best based on highly reputable sources. This
 |    list will be called the "Optimal Nutrition Index" or the "ONI" list.
 |  - Cite your sources somewhere most likely the algorithm explainer page
 |  - Basically the algorithm will compare these two lists to each food's
 |    nutrition facts and ultimately determine if that food is MORE bad
 |    for you than good for you or vice versa based on certain criteria.
 |  - How will the algorithm do this?
 |      - It will do it in layers..(self contained asyn functions). Each
 |        outer layer will influence the final answer more than its inner
 |        adjacent layer. This, of course, assumes that our ONI
 |        list is actually a reputable and empirical list of optimal
 |        nutrition which is a hard sell for now. This is why we have
 |        layers...
 |      - First, for each nutrition fact of that food, if it is in ONI
          of bad nutrition data points then it will lose an int. For each
          nutriton fact of that food that is in our ONI good list it will
          gain an integer. This will sum up to a "Layer 1 Score". Thus a
          food's "layer 1 score" can only ever go as high as 50 points
          or as low as 50 points.
        - Second, the algorithm will consider the calories per serving.
          Basically this will be based on a spectrum. We will take the daily
          recommended caloric intake for most people and divide that by our
          food's calories per serving. This will tell us how many servings of
          that food you can eat until reaching your daily caloric intake.
          Thus, our numeric spectrum goes from 1 to 2000 (or whatever the daily
          recommended caloric intake is) with each number in that spectrum
          representing how many servings of that food you can eat before reaching
          your recommended daily caloric intake. This assumes that the more of something you can eat without exceeding your recommended caloric intake
          the, healthier it is for you. Based on where a certain food falls on
          that spectrum, we will take that number and call it our "Layer 2 Score".
        - Third, We will consider protein versus carbs and complex carbs. 
        - Fourth, the algorithm will consider that food's food group. This will
          require a list of the bad food groups and the good groups and assign
          an int?



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
