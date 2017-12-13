import { setTimeout } from 'timers';

var gpio = require('rpi-gpio')

function Button(emitter, pin) {
    this.emitter = emitter
    this.pin = pin
    this.listening = true

    console.log('gpio.js', emitter, pin)

    gpio.on('change', (c,v)=>{
        if(v==true){
            this.emitter.emit('gpio-press', this.pin)
            console.log('disable gpio listen')
            this.listening = false
            setTimeout(()=>{
                console.log('re-enable gpio listen')
                this.listening = true
            },5000)
        }
    })
    gpio.setup(this.pin, gpio.DIR_IN, gpio.EDGE_BOTH)
}

module.exports = Button