const Dbx = require('dropbox');
const fs = require('fs')
const moment = require('moment');

var Dropbox = function(emitter, token, file_path){
  this.emitter = emitter;
  this.file_path = file_path
  this.token = token
  this.dbx = new Dbx({accessToken: token});
  
  this.dbx.usersGetCurrentAccount()
    .then((r)=>{
        this.emitter.emit('dropbox-login-success', {
          name: r.name.display_name,
          email:r.email
        })
      })
    .catch((r)=>{
      console.log('dropbox-login-failure')
    }
  )

  this.subFolder = moment.utc().format('YYYY_MM_DD_HH_mm_ss')
  // console.log('Dropbox.js','New subfolder', this.subFolder)

  this.emitter.on('file-new', (d)=>{
    // console.log(this.dbx)
    var file = fs.readFileSync(this.file_path + "/"+ d)
    this.dbx.filesUpload({path: '/' + this.subFolder + '/' + d, contents: file})
    .then((r) => {
      // console.log(r)
      this.emitter.emit('dropbox-uploadSuccess')
      this.dbx.sharingCreateSharedLink({path:r.path_lower})
      .then((r)=>{
        this.emitter.emit('dropbox-newURL', r.url)
      })
    })
    .catch((e) => {
      // console.log(e)
      this.emitter.emit('dropbox-uploadFailed')
    });
  })
}

module.exports = Dropbox
