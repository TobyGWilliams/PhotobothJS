const config_file = './server/config.json'

const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const Camera = require('./camera.js')
const File = require('./file.js')
const Server = require('./server.js')
const JsonFile = require('jsonfile')
const Socket = require('./socket.js')

var config = JsonFile.readFileSync(config_file)
console.log(config)

var server = new Server()
var emitter = new EventEmitter()
var file = new File(emitter, config.file_path)
var countdown = new Countdown(emitter)
var camera = new Camera(emitter)

var serv = server.server
var socket = new Socket(emitter, serv)

countdown.start(10)
// const GPIO = require('./gpio.js')
// var gpioa = new GPIO(emitter, 18)

