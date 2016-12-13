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
 |  - Each food will start with a "Health Score" of 100 points. That represents
      the highest health score possible for any given food which means its ultra
      healthy for you.
    - Determine a list of the top 30 worst nutrients and minerals for you
 |    and a list of the top 30 healthiest based on highly reputable sources. This
 |    list will be called the "Optimal Nutrition Index" or the "ONI" list.
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
          of bad nutrition data points then it will not gain an int. For each
          nutriton fact of that food that is in our ONI good list it will
          gain an integer. This will sum up to a "Layer 1 Score". Thus a
          food's "layer 1 score" can only ever go as high as 30 points
          or as low as 1 points.
            - Max number of Points: 30
        - Second, the algorithm will consider the calories per 100 grams.
          Basically this will be based on a spectrum. We will take the daily
          recommended caloric intake for most people and divide that by our
          food's calories per 100 grams. This will tell us how many 100 grams servings of that food you can eat until reaching your daily caloric intake. Thus, our numeric spectrum goes from 1 to 2500. We then take this number, divide it by 100 and use that as our "Layer 2 Score" This assumes that the more of something you can eat without exceeding your recommended caloric intake the, healthier it is for you. Based on where a certain food falls on that spectrum, we will take that number and call it our "Layer 2 Score".
            - Max number of Points: 25
            - source for using 2500 calories as lifetime average. https://www.cnpp.usda.gov/sites/default/files/usda_food_patterns/EstimatedCalorieNeedsPerDayTable.pdf
        - Third, we will consider total trans-fats. According to the American Heart Association:
          "Limiting the amount of trans fats to less than 1 percent of your total daily calories. That means if you need about 2,000 calories a day, less than 20 calories (or 2 grams) should come from trans fats" - For our purposes we will use 2500 calories a day which means a maximum recommended limit of 2.5 grams trans fat a day. Since all of our food data is measured per every 100 grams of the food in questions, we will take the amount of calories for every 100 grams of that food, divide 2500 by that number, (2500 / 300kcal) = 8.1, take that result, multiply our total-trans fat per every 100 grams figure. If the product of this exceeds 2.5 grams then we will subtract 15 points from the total score. If it doesn't then nothing will happen to the total score.
        - Fourth, we will consider total sugar.
        - Fifth, the algorithm will consider that food's food group. Currently there are 25 food groups listed in NDB. While most of these food groups don't really indicate how healthy any of the foods that full under it are, there are a few groups that once can confidently identify as mostly unhealthy i.e. fast food, sweets. and other food groups one can for sure say are healthy i.e. fruits, vegetables, legumes, nut & seed, fats & oils. Therefore for each food group we've identified as mostly healthy we will attribute 5 points max since food group doesn't matter as much as the previous layers.
          - Max number of points: 15



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
