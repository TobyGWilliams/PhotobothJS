function Countdown(emitter) {
    console.log('Countdown.js init', emitter)
    this.e = emitter
    this.e.on('gpio-press', (x)=>{
	    this.start(10)
    })
}

Countdown.prototype.start = function(l) {
    var ticks = l
    this.e.emit('tick-start', 0)
    var timer = setInterval(
        () => {
            ticks -= 1
            
            console.log('Countdown.js tick', ticks)
            this.e.emit('tick', ticks)
            
            if (ticks==0) {
                console.log('Countdown.js tick-final', ticks)
                this.e.emit('tick-final', ticks)
                clearInterval(timer)
            }
        },
        1000
    );
}

module.exports = Countdown