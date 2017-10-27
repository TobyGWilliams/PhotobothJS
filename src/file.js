const path = require("path");
const fs = require('fs')
const EventEmitter = require('events')
const util = require('util')

const imgSrc = 'img/'
const imgDest = 'src/pictures'
var imageCount = 1


function PubSub() {
    EventEmitter.call(this)
    const that = this

    //START THE FILE WATCH
    console.log('Start watching files')
    fs.watch(imgSrc, function (event, filename) {
        if (fs.existsSync(imgSrc + filename) && event == 'rename') {
            //assign and increment the filename
            var tempFileName = 'img' + imageCount.toString().padStart(6, '0') + '.jpg'
            imageCount = imageCount + 1

            console.log('file event', event, filename,tempFileName);
            
            //copy the file
            fs.copyFile(
                path.join(imgSrc, filename), 
                path.join(imgDest, tempFileName),
                (e) => {
                    console.log(JSON.stringify(e))
                }
            )

            //emit so that other things can use the data
            that.emit('newFile', imgDest, tempFileName)
        }
    });
}

util.inherits(PubSub, EventEmitter)
module.exports = PubSub
