var Dbx = require('dropbox');

var Dropbox = function(token){
    var dbx = new Dbx({ accessToken: '' });
    dbx.filesListFolder({path: ''})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
}

module.exports = Dropbox