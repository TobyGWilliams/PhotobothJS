console.log('Countdown Test Script')

const config = require('../config.json')
const EventEmitter = require('events')
const Countdown = require('../countdown.js')

var emitter = new EventEmitter()
var countdown = new Countdown(emitter)

//switch for emitter logging
if (true) {
    emitter.on('tick',(d)=>{
        console.log('tick', d)
    })
    
    emitter.on('tick-final',(d)=>{
        console.log('tick-final', d)
    })
}

countdown.start(4, 8, 3)