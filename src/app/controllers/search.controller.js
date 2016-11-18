(function() {
  'use strict';

  // TODO:: Initiate onkeyup function (and on focus) after a minimum of 4 words entered that hits the API and returns a list of food names from a seperate service
  // TODO:: Once food names are returned UI needs to display them in the search result cards (explore what else can be displayed in each card from the data returned).
  // TODO:: Each card must have an onclick that results in a final API call for that specific food (based on the UUID) Not sure if that will be in a seperate controller yet..

  // Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation. Unlike services, there can be many instances of the same type of controller in an application. Moreover, additional dependencies are made available to Controllers like $scope.
  angular
    .module('commonSenseDietApp')
    .controller('SearchController', SearchController);


  function SearchController($document){
    // Using this pattern allows us to maintain a reference to the THIS scope as a means to 'reveal' public properties and methods for use as the 'view model'. It also has the added benefit of providing a lexical binding which can be referenced inside of closures!
    var vm = this;

    // This event handler is called by the ngKeyup directive in home.html.
    vm.handleKeyupEvent = function() {
      initializeSearch();
    };

    // Places the searchbar in top left corner of page on keyup then init API service methods
    function initializeSearch() {

      // Apply jqLite events to DOM selectors
      angular.element($document[0].querySelector('#wrapper')).addClass('not-visible');

      angular.element($document[0].querySelector('#move-searchbar')).removeClass('searchbar-container').addClass('global-searchbar-container');

      angular.element($document[0].querySelector('#disclaim-btn-container')).addClass('not-visible');

      angular.element($document[0].querySelector('.search-results-container')).removeClass('not-visible');

      angular.element($document[0].querySelector('.navbar')).addClass('lightgrey-bg');

      angular.element($document[0].querySelector('.navLogo')).addClass('not-visible');




    }


  }
})();
