import File from '../file';

const file = new File('/Users/towillia/Documents/Photobooth');

file.emitter.on('file-new', (fileName) => {
  console.log('new file', fileName);
});
