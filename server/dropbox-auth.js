const Dbx = require('dropbox');
const fs = require('fs')
const moment = require('moment');

const clientID = '4210jna60uh85i9'

var Dropbox = function(emitter, file_path){
  this.emitter = emitter;
  this.file_path = file_path

  this.status = 'not-auth'
  this.name = ''
  this.email = ''

  this.dbx = new Dbx();
  this.dbx.setClientId(clientID)

  this.emitter.on('config-get', ()=>{
    this.emitter.emit('dropbox-authUrl', this.dbx.getAuthenticationUrl('http://localhost:3000/dropbox', 'response_type=code'))
    this.emitter.emit('dropbox-authStatus', {
      status: this.status,
      name: this.name,
      email: this.email
    })
  })

  this.emitter.on('dropbox-token', (e) =>{
    const regexFileName = RegExp('access_token=(.*?)\&')
    if(e.match('access_token=(.*?)\&') != null) {
      const token = e.match('access_token=(.*?)\&')[1]
      console.log('dropbox-token', token)
      this.dbx.setAccessToken(token)
      this.dbx.usersGetCurrentAccount()
      .then((r)=>{
          console.log('dropbox-login-success',r.name.display_name,r.email)
          this.status = 'auth'
          this.email = r.email
          this.name = r.name.display_name
  
          this.emitter.emit('dropbox-login-success', {
            status: this.status,
            name: this.name,
            email: this.email
          })
        })
        .catch((r)=>{
          console.log('dropbox-login-failure')
        }
      )
    } else {
      console.log('no token found')
    }
   
  })
}

module.exports = Dropbox
