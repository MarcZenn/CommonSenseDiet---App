(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('ContactController', ContactController);


	function ContactController($http, $log) {
		// controllerAs syntax
		var vm = this;

    vm.processContactForm = function() {
      // Further form validation.
      // $log.log(vm.email);

      return $http.post('/submitContactUsForm')
          .then(returnSendSuccessful)
          .catch(sendFail);


      function returnSendSuccessful(response) {
        return response.data;
      }

      function sendFail(err) {
        return $log.error(err.data);
      }
    }


	}

})();
