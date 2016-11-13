(function() {
  'use strict';
  // This is a Directive...At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element as well as default template behavior. See index.html to see the element where this directive is anchored. What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive. The reason we use the term "compile".

  // To register a directive, you use the module.directive API.
  angular
    .module('commonSenseDietApp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  // Here we declare and define the Malarkey directive. malarkey is a library that came with the gulp generator. When you create a directive, it is restricted to attribute and elements only by default. In order to create directives that are triggered by class name, you need to use the restrict option. (restrict : E)
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/views/partials/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();
