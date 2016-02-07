(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('AboutController', AboutController);


  function AboutController($timeout, $location, $rootScope, anchorSmoothScroll,
  $document){
    // this is using controllerAs syntax
    var about = this;

    // Initiates showDisclaimer from ngClick directive in about.html and calls $anchorScroll
    // to scroll to disclaimer section.
    about.handleClickEvent = function($event, eID, anchorSmoothScroll) {
      $event.preventDefault();
      console.log('ass')
      showDisclaimer();

      $location.hash('scrolled-to');

      // call anchorScroll
      anchorSmoothScroll.scrollTo(eID);
    };

    // Makes disclaimer section visible in about.html and removes button.
    function showDisclaimer() {
      // set DOM selectors to variables using angular $document service
      var showDisclaimerBtn = angular.element($document[0].querySelector('#show-disclaimer-btn-container'))


      showDisclaimerBtn.addClass('not-visible')
      angular.element(document.querySelector('#scrolled-to')).removeClass('not-visible')
    }
  }
})();
