const config = require('../config.json')
const Dropbox = require('../dropbox-auth.js')
const EventEmitter = require('events')
const Server = require('../server.js')
const Socket = require('../socket.js')

var emitter = new EventEmitter()

var dropbox = new Dropbox(emitter)
var server = new Server(emitter, config.file_path)
var serv = server.server
var socket = new Socket(emitter, serv)

emitter.on('dropbox-login-success',(e) => {
    console.log('dropbox-login-success')
    console.log('send picture to dropbox')
    emitter.emit('camera-new-picture', 'C:/Users/Toby/Pictures/IMG_0004.JPG')
})
