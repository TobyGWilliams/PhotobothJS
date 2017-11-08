const os = require('os')
const path = require("path");
const fs = require('fs')

class File{
    constructor(e, f) {
        this.emitter = e
        this.filepath = f

        console.log('File.js', this.emitter, this.filepath)

        fs.watch(this.filepath, (event, filename) => {
            // console.log('change detected', event, filename, this.filepath)
            setTimeout(() => {
                const regexFileName = RegExp('img(.*).jpg')
                // console.log('callback', event, filename, this.filepath, fs.existsSync(this.filepath + "/"+ filename))
                if (event == 'rename' && regexFileName.test(filename) && fs.existsSync(this.filepath + "/"+ filename)) {
                    console.log('new file!')
                    this.emitter.emit('file-new', filename)
                }
            }, 50)
        });
    }
}

module.exports = File
