const Dbx = require('dropbox');
const fs = require('fs')
const moment = require('moment');

const clientID = '4210jna60uh85i9'

var Dropbox = function(emitter, file_path){
  this.emitter = emitter;
  this.file_path = file_path

  this.dbx = new Dbx();
  this.dbx.setClientId(clientID)
  console.log(this.dbx.getAuthenticationUrl('http://localhost:3000/dropbox'))


}

module.exports = Dropbox
