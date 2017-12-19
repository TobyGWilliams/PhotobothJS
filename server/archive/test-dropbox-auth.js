const config = require('./config.json')
const Dropbox = require('./dropbox-auth.js')
const EventEmitter = require('events')

var emitter = new EventEmitter()

var dropbox = new Dropbox(emitter, config.file_path)
  



setTimeout(()=>{}, 30000)