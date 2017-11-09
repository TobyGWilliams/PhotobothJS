const os = require('os')
const path = require("path");
const fs = require('fs')

const EventEmitter = require('events')
const Countdown = require('./countdown.js')
const Camera = require('./camera.js')
const File = require('./file.js')
const Server = require('./server.js')
const JsonFile = require('jsonfile')
const Socket = require('./socket.js')

const config_file = './server/config.json'
var config = JsonFile.readFileSync(config_file)

var server = new Server('C:/Users/Toby/Pictures/Google Photos Backup')
var emitter = new EventEmitter()
var file = new File(emitter, config.file_path)
var countdown = new Countdown(emitter)
var camera = new Camera(emitter)

var serv = server.server
var socket = new Socket(emitter, serv)


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
}, 5000)
