import childProcess from "child_process";
import EventEmitter from "events";

export class Camera {
  constructor(_path) {
    this.path = _path;
    this.emitter = new EventEmitter();
  }

  takePicture() {
    const fileName = `img${new Date().toISOString().replace(/:/g, "_")}.jpg`;
    const command = `gphoto2 --capture-image-and-download --filename '${
      this.path
    }/${fileName}'`;
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("picture-fail", command, fileName, error);
        this.emitter.emit("camera-picture-fail");
        return null;
      } else {
        this.emitter.emit("camera-picture-ready", fileName);
        return fileName;
      }
    });
  }
}
