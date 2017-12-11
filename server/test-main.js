const config = require('./config.json')

const Dropbox = require('./dropbox.js')
const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const File = require('./file.js')
const Server = require('./server.js')
const JsonFile = require('jsonfile')
const Socket = require('./socket.js')

var emitter = new EventEmitter()
var server = new Server(config.file_path)
var file = new File(emitter, config.file_path)
var dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path)


var serv = server.server
var socket = new Socket(emitter, serv)
