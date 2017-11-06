const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const Camera = require('./camera.js')
const File = require('./file.js')
// const GPIO = require('./gpio.js')

const filepath = 'C:/Users/Toby/Pictures'

var emitter = new EventEmitter()
var file = new File(emitter, filepath)
var countdown = new Countdown(emitter)
var camera = new Camera(emitter)
// var gpioa = new GPIO(emitter, 18)

emitter.on('file-new', (d)=>{
    console.log(d)
})

countdown.start(10)

