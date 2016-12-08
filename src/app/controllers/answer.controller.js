(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('AnswerController', AnswerController);


  function AnswerController($log, localStorageService){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.stored;
    vm.yesNoMaybe;

    // This gets called from the search.controller.js $rootScope listener and loads local storage data once and once only which is when the init click event occurs. The function below reloads the data once you're already on the page and happen to refresh.
    vm.getLocalStorageData = function() {
      // Retrieve data that answer.service.js saved into sessionStorage
      if(localStorageService.get('foodData')) {

        vm.stored = localStorageService.get('foodData');
        vm.yesNoMaybe = localStorageService.get('answer');

        $log.log(vm.stored);
        $log.log(vm.yesNoMaybe);

      } else {

        $log.log('No data in localStorage or sessionStorage!');
      }
    };

    vm.getLocalStorageData();
  }
})();
