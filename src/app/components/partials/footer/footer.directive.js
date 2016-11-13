(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .directive('includeFooter', includeFooter);

  /** @ngInject */
  function includeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/views/partials/footer.html',
      // controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();
