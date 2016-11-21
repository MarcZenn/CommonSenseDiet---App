(function() {
  'use strict';

  // This is a Directive...At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element. See home.html to see the element where this directive is anchored. What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive.
  angular
    .module('commonSenseDietApp')
    .directive('primarySearch', primarySearch);

  /** @ngInject */
  // Here we declare and define the Malarkey directive. malarkey is a library that came with the gulp generator. I'm not exactly sure what it does yet but it's passed here to acmeMalarkey as an argument and used later on in linkFunc().
  function primarySearch($log, $document, $timeout, Paginator) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/views/partials/primary-search.html',
      link: linkFunc,
      controller: 'SearchController',
      controllerAs: 'vm',
      bindToController: true // because the scope is isolated
    };

    return directive;

    // Here we use the malarkey library to set typespeed animation. We also pass in el, attr,(not clear where these are defined yet), the scope object native to Angular, and vm wich is 'controller-as' syntax for the MalarkeyContoller defined in the directive.
    function linkFunc(scope, el, attr, vm) {
      // This event handler is called by the ngKeyup directive in home.html.
      vm.handleKeyupEvent = function() {
        initializeSearch();
      };

      var timer;
      vm.pager = {};
      vm.setPage = setPage;
      vm.totalResults = 0;

      // Places the searchbar in top left corner of page on keyup then init API service methods and initialize to page 1 for Paginator service.
      function initializeSearch() {

        // Apply jqLite events to DOM selectors
        angular.element($document[0].querySelector('#wrapper')).addClass('not-visible');
        angular.element($document[0].querySelector('#move-searchbar')).removeClass('searchbar-container').addClass('global-searchbar-container');
        angular.element($document[0].querySelector('#disclaim-btn-container')).addClass('not-visible');
        angular.element($document[0].querySelector('.search-results-container')).removeClass('not-visible');
        angular.element($document[0].querySelector('.navbar')).addClass('lightgrey-bg').addClass('bottom-border-grey');
        angular.element($document[0].querySelector('.search-icon')).removeClass('not-visible');

        // Wait until search input value is defined and longer than 4 letters before sending to controller.
        if(vm.searchterm && vm.searchterm.length >= 4) {
          // It takes a split second for the view model to update with the entire input value thus the timeout below..must refactor this!
          timer = $timeout(function() {
            return vm.activate(vm.searchterm).then(function() {
              $log.info('Polling API');
            });
          }, 1000);


        }
      }

      // Watch API data from controller. When defined format and make it available to the 'view-model'. What is returned here is what we ng-repeat over to display search results.
      var watcher = scope.$watch('vm.searchresultsarray', function() {
        // vm.searchresultsarray will be undefined until the $destroy event below.
        if(!vm.searchresultsarray) {
          vm.searchresultsarray = [];
        }

        // TODO:: employ smarter string filtering..maybe lib or native helper
        angular.forEach(vm.searchresultsarray, function(searchResult) {
          searchResult.name = searchResult.name.split(/UPC:|gtin:/g)[0].replace(/\,/g,"").toLowerCase();
          searchResult.name = searchResult.name.charAt(0).toUpperCase() + searchResult.name.slice(1);
        });

        if (vm.searchresultsarray.length > 0) {
          $log.log(vm.searchresultsarray.length);
          // Invoke pagination if search results are in.
          vm.setPage(1, vm.searchresultsarray.length);
        }
      });

      // Paginate search results using our Paginator.service.js
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

      // Always be sure to cancel out your $timeouts at the $destroy event.
      scope.$on('$destroy', function () {
        watcher();
        $timeout.cancel(timer);
      });
    }
  }
})();
