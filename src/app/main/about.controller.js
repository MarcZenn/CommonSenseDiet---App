(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('AboutController', AboutController);


  function AboutController($timeout, $location, $rootScope, $document){
    // this is using controllerAs syntax
    var about = this;

    // Initiates showDisclaimer from ngClick directive in about.html and calls $anchorScroll
    // to scroll to disclaimer section.
    about.handleClickEvent = function($event, eID, anchorSmoothScroll) {
      $event.preventDefault();

      showDisclaimer();

      $location.hash('scrolled-to');

      // call anchorScroll
      anchorSmoothScroll.scrollTo(eID);
    };
  }
})();
