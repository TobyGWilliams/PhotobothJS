const config = require('../config.json');
const Dropbox = require('../dropbox.js');
const EventEmitter = require('events');
const Server = require('../server.js');

let emitter = new EventEmitter();
let server = new Server(emitter, config.file_path);
let io = require('socket.io').listen(server.serv);

new Dropbox(emitter);

io.on('connection', (socket) => {
    console.log('new user');
    socket.on('dropbox-token', (e) => {
        emitter.emit('dropbox-token', e);
    });
    socket.on('config-get', () => {
        emitter.emit('config-get');
    });
});

emitter.on('dropbox-login-success', () => {
    io.emit('dropbox-login-success', {});
    setTimeout(()=>{
        emitter.emit('dropbox-new-picture', 'C:/Users/Toby/Pictures/IMG_0004.JPG');
    }, 3000);
});
emitter.on('dropbox-upload-success', (e)=>{
    io.emit('dropbox-upload-success', e);
});
emitter.on('dropbox-authUrl', (e) => {
    io.emit('dropbox-authUrl', e);
});
emitter.on('dropbox-authStatus', (e) => {
    io.emit('dropbox-authStatus', e);
});
emitter.on('dropbox-url', (e) => {
    io.emit('dropbox-url', e);
});


//     this.io.on('connection', (socket) => {
//         console.log('a user connected');

//         socket.on('disconnect', function() {
//           console.log('user disconnected');
//         });

//         this.emitter.on('tick', (e) => {
//             socket.emit('tick', e);
//         });

//         this.emitter.on('tick-final', (e) => {
//             socket.emit('tick-final', e);
//         });

//         this.emitter.on('file-new', (e) => {
//             socket.emit('file-new', e);
//         });

//         this.emitter.on('dropbox-newURL', (e) => {
//             socket.emit('dropbox-newURL', e);
//         });

//         this.emitter.on('dropbox-upload-success', (e) => {
//             socket.emit('dropbox-upload-success', e);
//         });

//         this.emitter.on('dropbox-login-success', (e) => {
//             socket.emit('dropbox-login-success', e);
//         });


//         socket.on('dropbox-token', (e) => {
//             this.emitter.emit('dropbox-token', e);
//         });

//         socket.on('config-get', () => {
//             this.emitter.emit('config-get');
//         });
//     });
// }
