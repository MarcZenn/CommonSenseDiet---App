(function() {
  'use strict';

  // TODO:: Abstract MalarkeyController out of here!

  // This is a Directive...At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element. See home.html to see the element where this directive is anchored. What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive. The reason we use the term "compile".

  // To register a directive, you use the module.directive API.
  angular
    .module('commonSenseDietApp')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  // Here we declare and define the Malarkey directive. malarkey is a library that came with the gulp generator. I'm not exactly sure what it does yet but it's passed here to acmeMalarkey as an argument and used later on in linkFunc(). When you create a directive, it is restricted to attribute and elements only by default. In order to create directives that are triggered by class name, you need to use the restrict option. (restrict : E)
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: 'MalarkeyController',
      controllerAs: 'vm'
    };

    return directive;

    // Here we use the malarkey library to set typespeed animation it seems but its not passed as it is accessible via the parent function. We also pass in el, attr,(not clear where these are defined yet), the scope object native to Angular, and vm wich is 'controller-as' syntax for the MalarkeyContoller defined in the directive.
    function linkFunc(scope, el, attr, vm) {
      var typist = malarkey(el[0], {
        typeSpeed: 80,
        deleteSpeed: 60,
        pauseDelay: 4000,
        loop: true,
        postfix: ' '
      });

      // Here I believe we are setting our directive to a class selector?????
      el.addClass('acme-malarkey');

      // This iterates over extra food values specified in the directive as an attribute.
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      // vm.foodnameslist is an array defined below in the MalarkeyController. Much like the forEach above, this one loops through the foodnameslist array (the data returned from our API service) and calls typist to animate the typing of each item on the home page. Notice it is defined but not called until the $destroy event.
      var watcher = scope.$watch('vm.foodnameslist', function(vm) {
        // vm.contributors will be undefined until $destroy.
        if(!vm.foodnameslist.list) {
          vm.foodnameslist.list = []
        }
        angular.forEach(vm.foodnameslist.list.item, function(foodName) {
          foodName = foodName.name.split('UPC')[0].replace(/\,/g,"").toLowerCase();

          typist.type(foodName).pause().delete();
        });
      });

      // This calls the watcher() above when the destroy event is triggered.Removes the current scope (and all of its children) from the parent scope. Removal implies that calls to $digest() will no longer propagate to the current scope and its children. Removal also implies that the current scope is eligible for garbage collection.The $destroy() is usually used by directives such as ngRepeat for managing the unrolling of the loop. Just before a scope is destroyed, a $destroy event is broadcasted on this scope. Application code can register a $destroy event handler that will give it a chance to perform any necessary cleanup. All this to mean that it's akin to an init function?????
      scope.$on('$destroy', function () {
        watcher();
      });
    }
  }
})();
