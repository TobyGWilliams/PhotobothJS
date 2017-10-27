const dropbox = require('./dropbox.js')
const path = require("path");
const fs = require('fs')
const events = require('events').EventEmitter
const msg = 'Welcome to PhotoboothJS'
const imgSrc = 'img/'
const imgDest = 'processed/'

console.log(msg)

var eventEmitter = new events.EventEmitter()

var listner1 = function listner1() {
    console.log('listner1 executed.');
 }
 
eventEmitter.addListener('newFile', listner1);
eventEmitter.emit('newFile');

// const emitNewFile = new events()


// // listen for file copy
// emitNewFile.on(
//     'newFile', 
//     (i,f) => {
//         fs.copyFile(
//             path.join(i, f), 
//             path.join(imgDest, f),
//             (e) => {
//                 console.log('file copied')
//             }
//         );
//     }
// )



// watch for new files in watch directory and emit events
fs.watch(imgSrc, function (event, filename) {
    if (fs.existsSync(imgSrc + filename) && event == 'rename') {
        console.log(
            'file event', 
            event, 
            filename, 
            path.join(imgSrc, filename)
        );

        // emitNewFile.emit('newFile',imgSrc,filename)
    }
});

module.exports = {
    eventEmitter
}