(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('AnswerController', AnswerController);


  function AnswerController($log, answerService, $scope){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    vm.foodInfo = answerService.foodInfo;

    // TODO:: This watch function must fire or it will shit out. Single Point of Failure...not good. Find a 'backup' way to call this. 
    $scope.$watch('vm.foodInfo', function() {
       // Watch vm.foodInfo and when it houses data call algorithm.

       // Inside algorithm service, return an answer and save answer to localstorage.

      // Once all the above is done, redirect to answer page and choose answer variable value depending on what the algorithm returns.
      var answer = 'yes'
      return $location.path(answer);
    });

  }
})();
