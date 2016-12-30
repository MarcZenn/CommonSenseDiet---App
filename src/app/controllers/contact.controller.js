(function() {
  'use strict';

	angular
		.module('commonSenseDietApp')
		.controller('ContactController', ContactController);


	function ContactController($http, $log) {
		// controllerAs syntax
		var vm = this;

    vm.processContactForm = function() {

      var email = vm;

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
        return response.data.message
      }

      function sendFail(err) {
        return $log.error(err.data);
      }
    }


	}

})();
