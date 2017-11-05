var Camera = function(){
}

Camera.prototype = {
  sys: require('sys'),
  exec: require('child_process').exec
}

Camera.prototype.takePicture = function(imageCount, nextImagePosition, callback){
    this.exec(
        "gphoto2 --capture-image-and-download --filename 'img%Y%m%d%H%M%S.jpg' ",     
        function(error, stdout, stderr){
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
                return false
            } else {
                return true
            }
    });
};

module.exports = Camera