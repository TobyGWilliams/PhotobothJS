/**
 * Communicates with the front end
 * @param {emitter} emitter - emitter that the application communicates over.
 * @param {server} server - server object to attach the socket to.
 */
function Socket(emitter, server) {
    this.emitter = emitter;
    console.log('socket.js - won\'t emit events unless user is connected');

    this.io = require('socket.io').listen(server);
    this.io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('disconnect', function() {
          console.log('user disconnected');
        });

        this.emitter.on('tick', (e) => {
            socket.emit('tick', e);
        });

        this.emitter.on('tick-final', (e) => {
            socket.emit('tick-final', e);
        });

        this.emitter.on('file-new', (e) => {
            socket.emit('file-new', e);
        });

        this.emitter.on('dropbox-newURL', (e) => {
            socket.emit('dropbox-newURL', e);
        });

        this.emitter.on('dropbox-upload-success', (e) => {
            socket.emit('dropbox-upload-success', e);
        });

        this.emitter.on('dropbox-login-success', (e) => {
            socket.emit('dropbox-login-success', e);
        });

        this.emitter.on('dropbox-authUrl', (e) => {
            socket.emit('dropbox-authUrl', e);
        });

        this.emitter.on('dropbox-authStatus', (e) => {
            socket.emit('dropbox-authStatus', e);
        });

        socket.on('dropbox-token', (e) => {
            this.emitter.emit('dropbox-token', e);
        });

        socket.on('config-get', () => {
            this.emitter.emit('config-get');
        });
    });
}

module.exports = Socket;
