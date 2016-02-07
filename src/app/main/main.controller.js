(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $document) {
   // using controllerAs syntax here. same thing as $scope.
    var main = this;


    main.classAnimation = '';
    // vm.awesomeThings = [];
    // vm.creationDate = 1450389822870;
    // vm.showToastr = showToastr;

    activate();

    function activate() {
      // getWebDevTec();
      $timeout(function() {
        main.classAnimation = 'pulse';
      }, 4000);
    }

    // This function not being used for now. Understand better later.
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      main.classAnimation = '';
    }

    // This function along with service no longer present on home page. Repurpose for other page.
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }

    // This event handler is called by the ngKeyup directive in home.html.
    main.handleTypeEvent = function() {
      typedSomethingIn();
    };

    // Places the searchbar in top left corner of page on key up
    function typedSomethingIn() {
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
