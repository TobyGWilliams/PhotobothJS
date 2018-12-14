import EventEmitter from 'events';
import fs from 'fs';

export class File {
  constructor(filePath) {
    this.emitter = new EventEmitter();
    this.filepath = filePath;
    fs.watch(this.filepath, (event, filename) => {
      setTimeout(() => {
        const regexFileName = RegExp('img(.*).jpg');
        if (
          event == 'rename' &&
          regexFileName.test(filename) &&
          fs.existsSync(this.filepath + '/' + filename)
        ) {
          this.emitter.emit('file-new', filename);
        }
      }, 50);
    });
  }
}
