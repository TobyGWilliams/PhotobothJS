console.log('Countdown Quad Test')

const config = require('../config.json')
console.log(config)

const EventEmitter = require('events')
const CountdownQuad = require('../countdown.js')
const Server = require('../server.js')
const Socket = require('../socket.js')

var emitter = new EventEmitter()

console.log(config.file_path)

var server = new Server(emitter, config.file_path)
var serv = server.server

var socket = new Socket(emitter, serv)
var countQ = new CountdownQuad(emitter)

emitter.on('tick',(d)=>{
    console.log('tick', d)
})

emitter.on('tick-final',(d)=>{
    console.log('tick-final', d)
})


countQ.start(4, 8, 3)
