(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('submitNewFoodController', submitNewFoodController);


	function submitNewFoodController($timeout, $location, $http, $log) {
		// Basically newFood = $scope (controllerAs syntax)
		var newFood = this;

		newFood.submitFood = function() {
		// Add user authentication later so users can't find this page without admin access

			// $http.post('/postNewFood', newFood.formData)
			// 	.then(function(res, err) {
			// 		// headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			// 		if (err) {
			// 			$log(res.data.err)
			// 		} else {
			// 			$log(res.data.success)
			// 		}
			// 	});
			$http({
      	method  : 'POST',
      	url     : '/postNewFood',
      	data    : newFood.formData,
      	dataType : "json",
      	headers : { 'Content-Type': 'application/json' }
    	})
    	.then(function(res, err) {
				if (err) {
					$log(res.data.err)
				} else {
					$log(res.data.success)
				}
			});

		}
	}

})();