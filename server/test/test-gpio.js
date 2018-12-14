const io = require('../gpio.js')

var gpio = new io( 12) //pin 12, GPIO18

gpio.emitter.on('button-press', ()=>{ 
console.log('button press')
})