(function() {
  'use strict';

  angular
    .module('underscore', [])
    .factory('_', _)

    function _($window) {
      return $window._;
    }

})();
