(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('ContactController', ContactController);


	function ContactController($http, $log, $scope, $timeout) {
		// controllerAs syntax
		var vm = this;

    vm.processContactForm = function() {

      var email = vm;
      vm.submitSuccess == false;

      $scope.$on('$destroy', function () {
        $timeout.cancel(returnSendSuccessful);
      });

      return $http({
               method: 'POST',
               url: '/api/submitContactUsForm',
               async : true,
               headers: {
                 'Content-Type': 'application/json'
               },
               data: email
              })
              .then(returnSendSuccessful)
              .catch(sendFail);

      function returnSendSuccessful(response) {
        if(response.statusText == 'OK') {
          $timeout(function() {
            vm.submitSuccess = true;
          });
        }
      }

      function sendFail(err) {
        return $log.error(err.data);
      }
    }
	}

})();
