const Dbx = require('dropbox');
const fs = require('fs')
const moment = require('moment');

const clientID = '4210jna60uh85i9'

var Dropbox = function(emitter, file_path){
  this.emitter = emitter;
  this.file_path = file_path

  this.dbx = new Dbx();
  this.dbx.setClientId(clientID)

  console.log(this.dbx.getAuthenticationUrl('http://localhost:3000/dropbox', 'response_type=code'))

  this.emitter.on('dropbox-token', (e) =>{
    const regexFileName = RegExp('access_token=(.*?)\&')
    const token = e.match('access_token=(.*?)\&')[1]
    console.log('dropbox-token', token)
    this.dbx.setAccessToken(token)
    this.dbx.usersGetCurrentAccount()
    .then((r)=>{
        console.log('dropbox-login-success',r.name.display_name,r.email)
        this.emitter.emit('dropbox-login-success', {
          name: r.name.display_name,
          email:r.email
        })
      })
      .catch((r)=>{
        console.log('dropbox-login-failure')
      }
  )
  })

//   this.dbx.usersGetCurrentAccount()
//   .then((r)=>{
//       this.emitter.emit('dropbox-login-success', {
//         name: r.name.display_name,
//         email:r.email
//       })
//     })
//   .catch((r)=>{
//     console.log('dropbox-login-failure')
//  }
// )



}

module.exports = Dropbox
