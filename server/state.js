import EventEmitter from "events";

export default class {
  constructor(filePath) {
    this.emitter = new EventEmitter();
    this.state = {
      filePath: filePath,
      serialPort: null,
      countdown: {
        numberOfPhotos: 1,
        initialCountdown: 5,
        subsequentCountdown: 5
      },
      webcam: {
        enabled: false
      }
    };
  }

  setState(state) {
    this.state = state;
    this.emitter.emit("state", this.state);
  }

  setFilePath(filePath) {
    console.log("update file");
    this.setState({
      ...this.state,
      filePath: filePath
    });
  }

  getFilePath() {
    return this.state.filePath;
  }
}
