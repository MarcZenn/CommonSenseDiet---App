(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('AboutController', AboutController);


  function AboutController($timeout, $scope, $location, $anchorScroll) {
    var scope = $scope

    // Initiates showDisclaimer from ngClick directive in about.html and calls $anchorScroll
    // to scroll to disclaimer section.
    scope.handleClickEvent = function() {
      $location.hash('scrolled-to');
      showDisclaimer();

      // call $anchorScroll
      $anchorScroll();
    };

    // Makes disclaimer section visible in about.html and removes button.
    function showDisclaimer() {
      angular.element(document.querySelector('#show-disclaimer-btn-container')).addClass('not-visible')
      angular.element(document.querySelector('#scrolled-to')).removeClass('not-visible')
    };
  }
})();