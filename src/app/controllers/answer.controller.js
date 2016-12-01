(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('AnswerController', AnswerController);


  function AnswerController($log, answerService, $rootScope, localStorageService, $location){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.stored;

    // This gets called from the search.controller.js $rootScope listener.
    vm.getLocalStorageData = function() {
      // Retrieve data that answer.service.js saved into sessionStorage
      if(localStorageService.get('foodData')) {
        vm.stored = localStorageService.get('foodData');

        $log.log(vm.stored);

        // Once all the above is done, redirect to answer page and choose answer variable value depending on what the algorithm returns.
        var answer = 'yes'
        return $location.path(answer);

      } else {

        $log.log('data was not saved to sessionStorage');
      }
    };




  }
})();
