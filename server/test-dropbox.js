const config = require('./config.json')
const Dropbox = require('./dropbox.js')
const EventEmitter = require('events')

var emitter = new EventEmitter()

var dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path)

emitter.emit('file-new', 'img0004.jpg')



// setTimeout(()=>{}, 10000)