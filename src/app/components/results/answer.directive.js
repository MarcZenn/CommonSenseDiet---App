(function() {
  'use strict';

  // This is a Directive...At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element. See home.html to see the element where this directive is anchored. What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive.
  angular
    .module('commonSenseDietApp')
    .directive('answer', answer);

  /** @ngInject */
  // Here we declare and define the Malarkey directive. Malarkey is an external non-angular JS library. It's set as a constant in index.constants.js. Installed via Bower.
  function answer() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/views/pages/answer.html',
      link: linkFunc,
      controller: 'SearchController',
      controllerAs: 'vm',
      bindToController: true // because the scope is isolated
    };

    return directive;

    // Here we use the malarkey library to set typespeed animation. We also pass in el, attr,(not clear where these are defined yet), the scope object native to Angular, and vm wich is 'controller-as' syntax for the MalarkeyContoller defined in the directive.
    function linkFunc(scope, el, attr, vm) {







      // Always be sure to cancel out your $timeouts at the $destroy event.
      // scope.$on('$destroy', function () {
      //   watcher();
      //   $timeout.cancel(timer);
      // });
    }
  }
})();
