const config = require('../config.json')
const Dropbox = require('../dropbox-auth.js')
const EventEmitter = require('events')
const Server = require('../server.js')
const Socket = require('../socket.js')

var emitter = new EventEmitter()

var dropbox = new Dropbox(emitter, config.file_path)
var server = new Server(emitter, config.file_path)
var serv = server.server
var socket = new Socket(emitter, serv)
