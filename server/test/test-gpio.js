const io = require('./gpio.js')
const EventEmitter = require('events')

var emitter = new EventEmitter()

var gpio = new G(emitter, 18) //pin 18, GPIO24

emitter.on('gpio-press', (x)=>{
	console.log('gpio-press')
})