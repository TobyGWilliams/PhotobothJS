const Server = require('../server.js');
const Socket = require('socket.io');

const config = {file_path: ''};

const server = new Server(config.file_path);

const serv = server.server;
const socket = new Socket(serv);

socket.on('connection', function(socket) {});
