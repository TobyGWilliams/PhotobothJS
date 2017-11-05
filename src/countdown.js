const EventEmitter = require('events')
const util = require('util')

function PubSub(p) {
    EventEmitter.call(this)
    const that = this
    this.start = (length) => {
        var ticks = 0
        var timer = setInterval(
            () => {
                ticks += 1
                that.emit('tick', ticks)
                if (ticks==length) {
                    clearInterval(timer)
                    that.emit('tick-final', ticks)
                }
            },
            1000
        );
    }
}

util.inherits(PubSub, EventEmitter)
module.exports = PubSub