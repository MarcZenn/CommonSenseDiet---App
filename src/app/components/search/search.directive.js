(function() {
  'use strict';

  // This is a Directive...At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element. See home.html to see the element where this directive is anchored. What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive.
  angular
    .module('commonSenseDietApp')
    .directive('primarySearch', primarySearch);

  /** @ngInject */
  // Here we declare and define the Malarkey directive. Malarkey is an external non-angular JS library. It's set as a constant in index.constants.js. Installed via Bower.
  function primarySearch($log, $document, $timeout, Paginator) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/views/components/primary-search.html',
      link: linkFunc,
      controller: 'SearchController',
      controllerAs: 'vm',
      bindToController: true // because the scope is isolated
    };

    return directive;

    // Here we handle user inputting search query events and search initiation with pagination.
    function linkFunc(scope, el, attr, vm) {
      vm.pager = {};
      vm.totalResults = 0;

      vm.handleQueryInput = function() {
        if(vm.searchterm && vm.searchterm.length >= 3) {
          // Tell main.controller.js to update DOM
          scope.$emit('updateDOM');
          // Wait until search input value is defined and consider debounce before init search.
          initializeSearch(vm.searchterm);
        }
      };

      // Here we call our search method inside search.controller.js to access our API. When we init our search we first wait for our API results array to come in and use a callback to display our search results this we we make sure Nothing happens until after we finish our search query.
      function initializeSearch(query) {

        return vm.search(query).then(function() {
          // Watch for the API data array to come in. Once defined, format it and make it available to the 'view-model'.
          if(vm.searchresultsarray.length >= 1) {
            angular.forEach(vm.searchresultsarray, function(searchResult) {
              if (searchResult.name) {
                searchResult.name = searchResult.name.split(/UPC:|gtin:/g)[0].replace(/\,/g,"").toLowerCase();
                searchResult.name = searchResult.name.charAt(0).toUpperCase() + searchResult.name.slice(1);
              }
            });
            // Invoke pagination via "setPage()" function below. Once search results are in, display search results via Paginator service.
            setPage(1, vm.searchresultsarray.length);

          } else {

            vm.searchresultsarray = [];
          }

          // Paginate search results using our Paginator.service.js and then render list to DOM.
          function setPage(page, length) {
            if(page < 1 || page > vm.pager.totalPages) {
              return;
            }
            // total number of search results
            vm.totalResults = length;
            // current page
            vm.page = page;
            // get pager object from service
            vm.pager = Paginator.getPaginator(length, page);
            // get current page of items
            vm.items =  vm.searchresultsarray.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
          }
        })
        .catch(function() {
          $log.log("Promise Failed");
        });
      }
    }
  }
})();
