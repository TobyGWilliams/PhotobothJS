import {Camera} from '../camera';
import fs from 'fs';

const camera = new Camera('');
camera.emittter.on('camera-picture-ready', (message) => {
  console.log(message);
  fs.readFile(message, function read(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
  });
});
console.log(camera.takePicture(), Date.now());
