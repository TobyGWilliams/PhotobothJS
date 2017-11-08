const config_file = './server/config.json'

const path = require('path');
const fs = require('fs')
const File = require('./file.js')
const EventEmitter = require('events')
const JsonFile = require('jsonfile')

var emitter = new EventEmitter()
var config = JsonFile.readFileSync(config_file)
console.log(config)


fs.readdir(config.file_path, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(config.file_path, file), err => {
      if (err) throw err;
    });
  }
});

setTimeout(()=>{
    var file = new File(emitter, config.file_path)
    fs.copyFile('C:/Users/Toby/Pictures/img0004.jpg', 'C:/Users/Toby/Pictures/Google Photos Backup/img0004.jpg', (err) => {});
}, 100)
