const os = require('os')
const path = require("path");
const fs = require('fs')
const EventEmitter = require('events')
const util = require('util')

function PubSub(p) {
    EventEmitter.call(this)
    const that = this
    const filePath = p
    console.log('Start watching files', p)
    fs.watch(filePath, function (event, filename) {
        console.log(event, filename)
        function watchFiles() {
            const regexFileName = RegExp('img(.*).jpg')
            console.log(event, filename, filePath)
            if (event == 'rename' && regexFileName.test(filename) && fs.existsSync(filePath + "/"+ filename)) {
                console.log('file event', event, filename);
                
                //emit so that other things can use the data
                that.emit('newFile', filePath, filename)
            }
        }
        setTimeout(watchFiles,50)
    });
}

util.inherits(PubSub, EventEmitter)
module.exports = PubSub
