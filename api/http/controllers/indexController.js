module.exports = {
    getIndex : function(req, res){
      res.sendFile(path.resolve('.././src/index.html'));
    }
}
