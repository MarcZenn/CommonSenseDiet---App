(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .factory('Paginator', Paginator);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app via global templating.
  function Paginator(_) {
    // Service definition
    var service = {
      getPaginator: getPaginator
    };

    return service;

    function getPaginator(totalItems, currentPage, pageSize) {

      // Default to first page
      currentPage = currentPage || 1;

      // Default page size is 10
      pageSize = pageSize || 10;

      // Calculate total pages and instatiate empty variables.
      var totalPages = Math.ceil(totalItems/pageSize);
      var startPage;
      var endPage;

      if (totalPages <= 10 ) {
        // Only show less than or exactly 10 if there are only 10 pages needed.
        startPage = 1;
        endPage = totalPages;
      } else {
        // Show more than 10 pages so calculate start and end pages
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if(currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
        } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
        }
      }

      // Calculate start and end item indexes
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // Create an array of pages to ng-repeat in the pager controls
      var pages = _.range(startPage, endPage + 1);

      // Return object with all pager properties required by the view-model
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };

    }
  }
})();
