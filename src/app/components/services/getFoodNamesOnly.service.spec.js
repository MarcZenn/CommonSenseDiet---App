(function() {
  'use strict';

  describe('service getFoodNamesOnly', function() {
    var getFoodNamesOnly;
    var $httpBackend;
    var $log;

    beforeEach(module('commonSenseDietApp'));
    beforeEach(inject(function(_getFoodNamesOnly_, _$httpBackend_, _$log_) {
      getFoodNamesOnly = _getFoodNamesOnly_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(getFoodNamesOnly).not.toEqual(null);
    });

    describe('apiHost variable', function() {
      it('should exist', function() {
        expect(getFoodNamesOnly.ndbApiKey).not.toEqual(null);
      });
    });

    describe('getContributors function', function() {
      it('should exist', function() {
        expect(getFoodNamesOnly.getFoodNamesList).not.toEqual(null);
      });

      it('should return data', function() {
        $httpBackend.when('GET',  getFoodNamesOnly.'http://api.nal.usda.gov/ndb/list?format=json&It=f' + '&max=' + limit + '&sort=n&offset=15&api_key=' + ndbApiKey).respond(200, [{pprt: 'value'}]);
        var data;
        getFoodNamesOnly.getFoodNamesList(1).then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length === 1).toBeTruthy();
        expect(data[0]).toEqual(jasmine.any(Object));
      });

      it('should define a limit per page as default value', function() {
        $httpBackend.when('GET',  getFoodNamesOnly.'http://api.nal.usda.gov/ndb/list?format=json&It=f' + '&max=' + limit + '&sort=n&offset=15&api_key=' + ndbApiKey).respond(200, new Array(30));
        var data;
        getFoodNamesOnly.getFoodNamesList().then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length === 30).toBeTruthy();
      });

      it('should log a error', function() {
        $httpBackend.when('GET',  getFoodNamesOnly.'http://api.nal.usda.gov/ndb/list?format=json&It=f' + '&max=' + limit + '&sort=n&offset=15&api_key=' + ndbApiKey).respond(500);
        getFoodNamesOnly.getFoodNamesList(1);
        $httpBackend.flush();
        expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
      });
    });
  });
})();
