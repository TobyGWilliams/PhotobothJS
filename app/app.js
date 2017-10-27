const File = require('./file.js')
const fs = require('fs')
const path = require('path')
const msg = 'Welcome to PhotoboothJS'
const imgDest = 'processed/'


function setupFileWatch(){
    const file = new File()
    file.on('newFile', function (i,f) {
        fs.copyFile(
            path.join(i, f), 
            path.join(imgDest, f),
            (e) => {
                // console.info('file copied', path.join(imgDest, f)) 
            }
        );
    })
}

