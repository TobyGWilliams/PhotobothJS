import childProcess from 'child_process';
import EventEmitter from 'events';

export class Camera {
  constructor(_path) {
    this.path = _path;
    this.emittter = new EventEmitter();
  }

  takePicture() {
    const fileName = `img${new Date().toISOString().replace(/:/g, '_')}.jpg`;
    const command = `gphoto2 --capture-image-and-download --filename '${
      this.path
    }/${outputFilePath}'`;
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('picture-fail', command, outputFilePath);
      } else {
        this.emittter.emit('camera-picture-ready', outputFilePath);
      }
    });
    return fileName;
  }
}
