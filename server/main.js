import Socket from 'socket.io';

import Server from './server.js';
import {Countdown} from './countdown';
import {GPIO} from './gpio';

const config = {file_path: ''};

const server = new Server(config.file_path);
const socket = new Socket(server.server);
const gpio = new GPIO(18);

const startCountdown = () => {
  const countdown = new Countdown(8, 4, 3);
  countdown.emitter.on('countdown-start', (e) =>
    socket.emit('countdown-start', e)
  );
  countdown.emitter.on('countdown-finish', (e) => {
    socket.emit('countdown-finish', e);
  });
  countdown.emitter.on('countdown-tick', (e) => {
    socket.emit('countdown-tick', e);
  });
  countdown.emitter.on('countdown-tick-final', (e) => {
    socket.emit('countdown-tick-final', e);
  });
  countdown.start();
};

gpio.emitter.on('button-press', startCountdown);

// socket.on('connection', () => {});

// // change screen time out.
// // exec('setterm -blank 0', (error, stdout, stderr) => {
// //     console.log('set screen time out')
// //     console.log('error', error)
// //     console.log('std out', stdout)
// //     console.log('std err', stderr)
// // })

// const Dropbox = require('./dropbox.js');
// const EventEmitter = require('events');
// const Countdown = require('./countdown.js');
// const Camera = require('./camera.js');
// const File = require('./file.js');
// const Server = require('./server.js');
// const JsonFile = require('jsonfile');
// const Socket = require('./socket.js');
// const IO = require('./gpio.js');

// let emitter = new EventEmitter();
// let server = new Server(emitter, config.file_path);
// let file = new File(emitter, config.file_path);
// let camera = new Camera(emitter, config.file_path);
// let gpio = new IO(emitter, config.watch_pin);
// let dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path);

// let serv = server.server;
// let socket = new Socket(emitter, serv);
