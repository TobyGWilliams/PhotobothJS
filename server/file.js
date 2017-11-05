const os = require('os')
const path = require("path");
const fs = require('fs')

function callback_file_watch (event, filename) {
    console.log(event, filename)
    function watchFiles() {
        const regexFileName = RegExp('img(.*).jpg')
        // console.log(event, filename, filePath)
        if (event == 'rename' && regexFileName.test(filename) && fs.existsSync(filePath + "/"+ filename)) {
            // console.log('file event', event, filename);
            this.emitter.emit('file-new', filename)
        }
    }
    setTimeout(watchFiles,50)
}


function File(emitter, filepath) {
    this.emitter = emitter
    this.filepath = filepath
    
    console.log('File.js', this.emitter, this.filepath)

    fs.watch(this.filepath, callback_file_watch);
}


module.exports = File
