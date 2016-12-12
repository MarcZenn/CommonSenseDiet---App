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
            - Max number of Points: 50
        - Second, the algorithm will consider the calories per 100 grams.
          Basically this will be based on a spectrum. We will take the daily
          recommended caloric intake for most people and divide that by our
          food's calories per 100 grams. This will tell us how many 100 grams servings of that food you can eat until reaching your daily caloric intake. Thus, our numeric spectrum goes from 1 to 2500. We then take this number, divide it by 100 and use that as our "Layer 2 Score" This assumes that the more of something you can eat without exceeding your recommended caloric intake the, healthier it is for you. Based on where a certain food falls on that spectrum, we will take that number and call it our "Layer 2 Score".
            - Max number of Points: 25
            - source for using 2500 calories as lifetime average. https://www.cnpp.usda.gov/sites/default/files/usda_food_patterns/EstimatedCalorieNeedsPerDayTable.pdf
        - Third, We will consider protein versus carbs and complex carbs. It seems that
          the relationship between these two is that they are inverses of each other. In
          other words, the more protein over carbs a food has the better it is for you
          while the more carbs over proteins a food has the worse it is for you. But what
          if the foods have equal amounts of each? Seeing as how really any carb intake
          whatsoever is not recommended as healthy for you, we will offset this by
          counting every carb as 2. So if a food has 10 carb per serving, it will really
          count as 20 carbs per serving. (This 2x factor will require some heavy empirical
          evidence that carbs are really, really bad for you). Our "Layer 3 Score" will
          consist of carbs per serving times 2 divided protein per serving. The idea here is that really any carbs are bad for you and thus our "Layer 3 Score"  should aim to be in the negatives. If it is then we will add that to our overall score as a postive
          number. If the "Layer 3 Score " is in the positives then we will subtract
          that nubmer from our overall score.
        - Fourth, the algorithm will consider that food's food group. This will require a list of the bad food groups and the good groups and assign an int?
          - Max number of points: 10




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
