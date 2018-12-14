import childProcess from 'child_process';

export class Camera {
  constructor(_path) {
    this.path = _path;
  }

  takePicture() {
    const outputFilePath =
      this.path + '/img' + new Date().toISOString().replace(/:/g, '_') + '.jpg';
    const command = `gphoto2 --capture-image-and-download --filename '${outputFilePath}'`;
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('picture-fail', command, outputFilePath);
      } else {
        console.log(Date.now());
      }
    });
    return outputFilePath;
  }
}
