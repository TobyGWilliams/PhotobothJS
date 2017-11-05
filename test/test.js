var assert = require('assert');
var fs = require('fs')
var FILE = require('../src/file.js')
var camera = require('../src/camera.js')

watchFolderPath = 'C:/Users/Toby/Pictures/Google Photos Backup/'


describe('fileCopy', function() {
    it('should emit an event when file is copied', function(done) {
        fs.readdir(watchFolderPath, (err, files) => {
            files.forEach(file => {
                fs.unlinkSync(watchFolderPath+file)
            });
        })

        const file = new FILE(watchFolderPath)
        file.on('newFile', function (p,f) {
            assert.equal('img0004.jpg', f)
            done()
        })
        fs.copyFileSync('C:/Users/Toby/Pictures/img0004.jpg', watchFolderPath+'img0004.jpg')
        done()
    });
});

describe('cameraModule', function() {
    it('should do something', function() {
        var c = new camera()
        assert.equal(true,c.takePicture())
    });
});