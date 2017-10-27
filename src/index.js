const FILE = require('./file.js')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const file = new FILE()

file.on('newFile', function (p,f) {
  io.emit('new file', f);
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
 
app.get('/pictures/*', function (req, res) {
  res.sendFile(__dirname + req.url);
})

app.get('/client/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
