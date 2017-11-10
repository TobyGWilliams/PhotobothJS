var Camera = function(emitter){
    this.emitter = emitter   
    this.exec = require('child_process').exec

    console.log('Camera.js init', emitter)
    
    this.emitter.on('tick-final', (e)=>{
        // console.log('Camera.js', e)
        this.exec(
            "gphoto2 --capture-image-and-download --filename 'img%Y%m%d%H%M%S.jpg' ",     
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                    return false
                } else {
                    return true
                }
            }
        );
    })
}

module.exports = Camera