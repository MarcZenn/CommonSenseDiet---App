(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('submitNewFoodController', submitNewFoodController);


  function submitNewFoodController($timeout, $scope, $location, $anchorScroll, $https) {

  	$scope.submitNewFood = function() {
  		// Add user authentication later so users can't find this page without admin access

  		console.log(food submitted)

  		$http.post('/submitNewFood', $scope.newFoodFormData)
  			.then(function(response) {

  				// if http request is not successful...
  				if () {
  					console.log("error submitting form")
  					// if everything is ok then...
  				} else {
  					
  				}
  			})
  	}
  }

  }
)();