var https = require("https");

module.exports = {
    getSearchResults : function(req, res){
      var call = https.get(process.env.NDB_API_URL + '/ndb/search/?format=json&q=' + req.params.searchterm + '&sort=r&api_key=' + process.env.NDB_API_KEY, function(resp){
        console.log('STATUS: ' + resp.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resp.headers));
        resp.setEncoding('utf8');
        var list = '';
        resp.on('data', function(chunk) {
          list += chunk;
        });
        resp.on('end', function() {
          return res.send(list);
        });
      });
      call.on("error", function(e){
        console.log("Error accessing NDB API: " + e.message);
      });
      call.end();
    },
    getFoodNamesOnly : function(req, res) {
      var call = https.get(process.env.NDB_API_URL + '/ndb/list?format=json&It=f' + '&max=' + req.params.limit + '&sort=n&offset=35&api_key=' + process.env.NDB_API_KEY, function(resp) {
        console.log('STATUS: ' + resp.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resp.headers));
        resp.setEncoding('utf8');
        var list = '';
        resp.on('data', function(chunk) {
          list += chunk;
        });
        resp.on('end', function() {
          return res.send(list);
        });
      });
      call.on("error", function(e){
        console.log("Error accessing NDB API: " + e.message);
      });
      call.end();
    },
    getNutritionalData : function(req, res) {
      var call = https.get(process.env.NDB_API_URL + '/ndb/reports/?ndbno=' + req.params.id + '&type=f&format=json&api_key=' + process.env.NDB_API_KEY, function(resp) {
        console.log('STATUS: ' + resp.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resp.headers));
        resp.setEncoding('utf8');
        var data = '';
        resp.on('data', function(chunk) {
          data += chunk;
        });
        resp.on('end', function() {
          return res.send(data);
        });
      });
      call.on("error", function(e){
        console.log("Error accessing NDB API: " + e.message);
      });
      call.end();
    }
}
