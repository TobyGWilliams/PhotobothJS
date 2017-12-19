const config = require('./config.json')
console.log(config.dropboxToken)


var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: config.dropboxToken });
dbx.filesListFolder({path: '/2017_12_15_18_30_30'})
  .then(function(response) {
    var i = 0
    console.log(i)
    function rename(i){
        console.log('rename', i)
        dbx.filesCopyV2({
            from_path: response.entries[i].path_lower,
            to_path:'/2017_12_15_18_30_30/renamed/' + response.entries[i].name.replace(/:/g, '_'),
        }).then((r)=>{
            console.log(r)
            i++
            rename(i)
        }).catch((r)=>{
            console.log(r)
        })
    }

    rename(i)

  })
  .catch(function(error) {
    console.log(error);
  });