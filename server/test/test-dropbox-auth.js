const config = require('../config.json');
const Dropbox = require('../dropbox.js');
const EventEmitter = require('events');
const Server = require('../server.js');
const Socket = require('../socket.js');

let emitter = new EventEmitter();
let server = new Server(emitter, config.file_path);
let serv = server.server;

new Socket(emitter, serv);
new Dropbox(emitter);

emitter.on('dropbox-login-success', (e) => {
    console.log('dropbox-login-success');
    setTimeout(()=>{
        emitter.emit('camera-new-picture', 'C:/Users/Toby/Pictures/IMG_0004.JPG');
    }, 3000);
});

emitter.on('dropbox-upload-success', ()=>{
    console.log('dropbox-upload-success');
});
