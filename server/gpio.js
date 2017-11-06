var gpio = require('rpi-gpio')

function Button(emitter, pin) {
    this.emitter = emitter
    this.pin = pin
    console.log('gpio.js',emitter, pin)

    gpio.on('change', (c,v)=>{
        if(v==true){
            this.emitter.emit('gpio-press', this.pin)
        }
    })
    gpio.setup(this.pin, gpio.DIR_IN, gpio.EDGE_BOTH)
}

module.exports = Button