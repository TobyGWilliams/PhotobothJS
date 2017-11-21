const Dbx = require('dropbox');
const fs = require('fs')
const moment = require('moment');

var Dropbox = function(emitter, token, file_path){
  this.emitter = emitter;
  this.file_path = file_path
  this.token = token
  this.dbx = new Dbx({accessToken: token});

  this.subFolder = moment.utc().format('YYYY_MM_DD_HH_mm_ss')
  console.log('Dropbox.js','New subfolder', this.subFolder)

  this.emitter.on('file-new', (d)=>{
    var file = fs.readFileSync(this.file_path + "/"+ d)
    
    this.dbx.filesUpload({path: '/' + this.subFolder + '/' + d, contents: file})
    .then(function(response) {
      this.emitter.emit('dropbox-uploadSuccess')
      // console.log(response);
    })
    .catch(function(error) {
      this.emitter.emit('dropbox-uploadFailed')
      // console.error(error);
    });

  })

}

module.exports = Dropbox
