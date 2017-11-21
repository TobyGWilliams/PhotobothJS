const config_file = './config.json'

const Dropbox = require('./dropbox.js')
const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const Camera = require('./camera.js')
const File = require('./file.js')
const Server = require('./server.js')
const JsonFile = require('jsonfile')
const Socket = require('./socket.js')
const IO = require('./gpio.js')

var config = JsonFile.readFileSync(config_file)
console.log(config)


var emitter = new EventEmitter()
var server = new Server(config.file_path)
var file = new File(emitter, config.file_path)
var countdown = new Countdown(emitter)
var camera = new Camera(emitter, config.file_path)
var gpio = new IO(emitter, 18)
var dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path)


var serv = server.server
var socket = new Socket(emitter, serv)


// emitter.on('gpio-press', (x)=>{
// 	console.log('gpio-press')
// })


// countdown.start(10)

//setInterval(
 //    ()=>{ countdown.start(10) }, 
//     25000
 //)

// const GPIO = require('./gpio.js')
// var gpioa = new GPIO(emitter, 18)



