import Socket from 'socket.io';
import jsonfile from 'jsonfile';

import Server from './server';
import {Camera} from './camera';
import {Countdown} from './countdown';
import {Dropbox} from './dropbox';
import {Button} from '../gpio';

const configFile = './server/config.json';

const config = jsonfile.readFileSync(configFile);

const gpio = new Button(12); // pin 12, GPIO18
const server = new Server(config.file_path);
const socket = new Socket(server.server);
const dropbox = new Dropbox(config.file_path);
const camera = new Camera(config.file_path);

if (config.dropboxAuthToken) {
  dropbox.setAccessToken(config.dropboxAuthToken);
}

const startCountdownMultiple = () => {
  const numberOfPhotos = 1;
  const countdown = new Countdown(10, numberOfPhotos, 5);
  countdown.emitter.on('countdown-start', (message) =>
    socket.emit('countdown-start', message)
  );
  countdown.emitter.on('countdown-finish', (message) => {
    socket.emit('countdown-finish', message);
  });
  countdown.emitter.on('countdown-tick', (message) => {
    socket.emit('countdown-tick', message);
  });
  countdown.emitter.on('countdown-tick-final', (message) => {
    const picture = camera.takePicture();
    socket.emit('countdown-tick-final', {message, picture});
  });
  countdown.start();
};

gpio.emitter.on('button-press', startCountdownMultiple());

socket.on('connection', (client) => {
  client.on('config-get', () => {
    socket.emit('file-path', config.file_path);
    socket.emit('dropbox-authUrl', dropbox.getLoginUrl());
    socket.emit('dropbox-authStatus', dropbox.getAuthStatus());
  });
  client.on('dropbox-token', (message) => {
    if (message.match('access_token=(.*?)&') != null) {
      dropbox.setAccessToken(message.match('access_token=(.*?)&')[1]);
    } else {
      console.log('dropbox token failed', message);
    }
  });
});

camera.emittter.on('camera-picture-ready', (message) => {
  socket.emit('camera-picture-ready', message);
  dropbox.newPicture(message);
});

dropbox.emitter.on(
  'dropbox-login-success',
  ({status, name, email, token}) => {
    socket.emit('dropbox-login-success', {status, name, email});
    config.dropboxAuthToken = token;
    jsonfile.writeFile(configFile, config);
  }
);

dropbox.emitter.on('dropbox-login-failure', (message) => {
  config.dropboxAuthToken = null;
  jsonfile.writeFile(configFile, config);
});

dropbox.emitter.on('dropbox-url', (message) => {
  socket.emit('dropbox-url', message);
});

// // change screen time out.
// // exec('setterm -blank 0', (error, stdout, stderr) => {
// //     console.log('set screen time out')
// //     console.log('error', error)
// //     console.log('std out', stdout)
// //     console.log('std err', stderr)
// // })

// const gpio = new GPIO(18);
// import {GPIO} from './gpio';
// gpio.emitter.on('button-press', startCountdown);
