(function() {
  'use strict';

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $document) {
   // using controllerAs syntax here. same thing as $scope.
    var main = this;


    main.classAnimation = '';
    main.creationDate = 1450389822870;

    activate();

    function activate() {
      $timeout(function() {
        main.classAnimation = 'pulse';
      }, 10000);
    }

    // This event handler is called by the ngKeyup directive in home.html.
    main.handleKeyupEvent = function() {
      initializeSearch();
    };

    // Places the searchbar in top left corner of page on key up
    function initializeSearch() {
      // set DOM selectors to variables using angular $document service.
      var wrapper = angular.element($document[0].querySelector('#wrapper'));
      var moveSearchbar = angular.element($document[0].querySelector('#move-searchbar'))
      var disclaimerContainer = angular.element($document[0].querySelector('#disclaim-btn-container'))
      var searchResults = angular.element($document[0].querySelector('.search-results-container'));

      // Apply jqLite events to DOM selectors
      wrapper.addClass('not-visible')
      moveSearchbar.removeClass('searchbar-container').addClass('global-searchbar-container')
      disclaimerContainer.addClass('not-visible')
      searchResults.removeClass('not-visible')
    }
  }
})();
