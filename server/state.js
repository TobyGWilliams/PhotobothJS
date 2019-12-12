import EventEmitter from "events";

export default class {
  constructor(filePath) {
    this.emitter = new EventEmitter();
    this.state = {
      filePath: filePath,
      serialPort: null,
      countdown: {
        config: {
          number: 1,
          initial: 5,
          subsequent: 3
        }
      },
      webcam: {
        enabled: false
      },
      dropbox: {}
    };
  }

  setState(state) {
    this.state = state;
    this.emitter.emit("state", this.state);
  }

  setFilePath(filePath) {
    this.setState({
      ...this.state,
      filePath: filePath
    });
  }

  setDropbox({ status, name, email }) {
    this.setState({ ...this.state, dropbox: { status, name, email } });
  }

  getFilePath() {
    return this.state.filePath;
  }
}
