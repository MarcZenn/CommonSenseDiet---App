(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('ContactController', ContactController);


	function ContactController($http, $log) {
		// controllerAs syntax
		var vm = this;

    vm.contactInfo = {
      email: vm.email
    }

    vm.processContactForm = function() {

      return $http.post('/api/submitContactUsForm', vm.contactInfo)
          .then(returnSendSuccessful)
          .catch(sendFail);

      function returnSendSuccessful(response) {
        $log.log(response);
        // return response.data;
      }

      function sendFail(err) {
        return $log.error(err.data);
      }
    }


	}

})();
