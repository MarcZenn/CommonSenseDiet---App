(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('submitNewFoodController', submitNewFoodController);


  function submitNewFoodController($timeout, $scope, $location, $anchorScroll) {
    var scope = $scope

    console.log("on submit new foods page");
  };

  }
})();