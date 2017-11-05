const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const Camera = require('./camera.js')
const File = require('./file.js')
const GPIO = require('./gpio.js')

const filepath = 'c:/users/toby/pictures'

var emitter = new EventEmitter()
var file = new File(emitter, filepath)
var countdown = new Countdown(emitter)
var camera = new Camera(emitter)
var GPIO = new GPIO(emitter, 18)

emitter.on('tick-final', (d)=>{
    console.log(d)
})

emitter.on('tick', (d)=>{
    console.log(d)
})

emitter.on('file-new', (d)=>{
    console.log(d)
})

countdown.start(10)

