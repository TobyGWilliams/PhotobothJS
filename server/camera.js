// const path = require('path');

let Camera = function(emitter, path) {
    this.path = path;
    this.emitter = emitter;
    this.exec = require('child_process').exec;

    console.log('Camera.js init', emitter);

    this.emitter.on('tick-final', (e)=>{
        let outputFilePath = this.path + '/img' + new Date().toISOString().replace(/:/g, '_') + '.jpg';
        console.log(outputFilePath);
        this.exec(
            'gphoto2 --capture-image-and-download --filename \'' + outputFilePath +'\'',
            (error, stdout, stderr) => {
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                console.log('error', error);
                if (error !== null) {
                    return false;
                } else {
                    return true;
                }
            }
        );
    });
};

module.exports = Camera;
