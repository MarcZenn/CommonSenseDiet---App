(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout, webDevTec, toastr, $scope) {
    var vm = this,
      scope = $scope


    // Places the searchbar in top left corner of page on key up
    function typedSomethingIn() {
      angular.element(document.querySelector('#wrapper')).addClass('not-visible');
      angular.element(document.querySelector('#move-searchbar')).removeClass('searchbar-container').addClass('global-searchbar-container')
      angular.element(document.querySelector('#disclaim-btn-container')).addClass('not-visible');
    };



  }
})();