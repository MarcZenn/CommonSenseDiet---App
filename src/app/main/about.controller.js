(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('AboutController', AboutController);


  function AboutController($timeout, $location, anchorSmoothScroll) {
    // this is using controllerAs syntax
    var about = this;

    // Initiates showDisclaimer from ngClick directive in about.html and calls $anchorScroll
    // to scroll to disclaimer section.
    about.handleClickEvent = function($event, anchorSmoothScroll) {
      $event.preventDefault();
      showDisclaimer();

      $location.hash('scrolled-to');

      // call anchorScroll
      anchorScroll.scrollTo(eID);
    };

    // Makes disclaimer section visible in about.html and removes button.
    function showDisclaimer() {
      angular.element(document.querySelector('#show-disclaimer-btn-container')).addClass('not-visible')
      angular.element(document.querySelector('#scrolled-to')).removeClass('not-visible')
    }
  }
})();