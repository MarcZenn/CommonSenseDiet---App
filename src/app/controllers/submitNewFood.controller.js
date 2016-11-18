(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('submitNewFoodController', submitNewFoodController);


	function submitNewFoodController($timeout, $location, $http, $log) {
		// Basically newFood = $scope (controllerAs syntax)
		var vm = this;

		// vm.submitFood = function() {
		// // Add user authentication later so users can't find this page without admin access
    //
		// 	$http.post('/postNewFood', vm.formData)
		// 		.then(function(res, err) {
		// 			// headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		// 			if (err) {
		// 				$log(res.data.err)
		// 			} else {
		// 				$log(res.data.success)
		// 			}
		// 		});
    //
		// }
	}

})();
