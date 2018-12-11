import Socket from 'socket.io';

import Server from './server.js';
import {Countdown} from './countdown';
// import {GPIO} from './gpio';
import {File} from './file';
import {Dropbox} from './dropbox';

const config = {file_path: '/Users/towillia/Documents/Photobooth'};

const file = new File(config.file_path);
const server = new Server(config.file_path);
const socket = new Socket(server.server);
const dropbox = new Dropbox();
// const gpio = new GPIO(18);

const startCountdown = () => {
  const countdown = new Countdown(8, 4, 3);
  countdown.emitter.on('countdown-start', (countdown) =>
    socket.emit('countdown-start', countdown)
  );
  countdown.emitter.on('countdown-finish', (countdown) => {
    socket.emit('countdown-finish', countdown);
  });
  countdown.emitter.on('countdown-tick', (countdown) => {
    socket.emit('countdown-tick', countdown);
  });
  countdown.emitter.on('countdown-tick-final', (countdown) => {
    socket.emit('countdown-tick-final', countdown);
  });
  countdown.start();
};

// gpio.emitter.on('button-press', startCountdown);

file.emitter.on('file-new', (fileName) => {
  socket.emit('file-new', fileName);
});

// when a new client connects setup up the listeners for that client.
socket.on('connection', (client) => {
  // when the new client sends the things, do the things.
  client.on('config-get', () => {
    socket.emit('file-path', config.file_path);
    socket.emit('dropbox-authUrl', dropbox.getLoginUrl());
    socket.emit('dropbox-authStatus', dropbox.getAuthStatus());
  });
  client.on('dropbox-token', (message) => {
    console.log(message);
    dropbox.setAccessToken(message);
  });
});

dropbox.emitter.on('dropbox-login-success', (message) => {
  console.log('dropbox-login-success');
  socket.emit('dropbox-login-success', message);
});

// // change screen time out.
// // exec('setterm -blank 0', (error, stdout, stderr) => {
// //     console.log('set screen time out')
// //     console.log('error', error)
// //     console.log('std out', stdout)
// //     console.log('std err', stderr)
// // })

// const Camera = require('./camera.js');
// const JsonFile = require('jsonfile');

// let camera = new Camera(emitter, config.file_path);
// let dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path);
