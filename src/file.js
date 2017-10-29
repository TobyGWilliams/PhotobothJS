const os = require('os')
const path = require("path");
const fs = require('fs')
const EventEmitter = require('events')
const util = require('util')

function PubSub(p) {
    EventEmitter.call(this)
    const that = this

    console.log('Start watching files', p)
    fs.watch(p, function (event, filename) {
        console.log(event, filename)
        function watchFiles() {
            console.log(event, filename)
            if (fs.existsSync(p + filename) && event == 'rename') {
                console.log('file event', event, filename);
                
                //emit so that other things can use the data
                that.emit('newFile', p, filename)
            }
        }
        setTimeout(watchFiles,500)
    });
}

util.inherits(PubSub, EventEmitter)
module.exports = PubSub
