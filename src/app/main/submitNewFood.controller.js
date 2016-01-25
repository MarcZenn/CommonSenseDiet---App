(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('submitNewFoodController', submitNewFoodController);


	function submitNewFoodController($timeout, $location, $http, $log) {
		// here I am using controllerAs syntax. same thing as $scope.
		var newFood = this;

		newFood.submitFood = function() {
		// Add user authentication later so users can't find this page without admin access
			$http.post('/postNewFood', newFood.formData)
				.then(function(res) {
					$log(res.body)
				})
		}
	}

})();