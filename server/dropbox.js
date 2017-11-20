var Dbx = require('dropbox');

var Dropbox = function(token){
    var dbx = new Dbx({ accessToken: token });
    dbx.filesUpload({path: './config.json', contents: file})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
}

module.exports = Dropbox