const FILE = require('./file.js')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const dirTree = require('directory-tree');

var config = {
  file: {
    filepath: '',
    set:false
  }
}


io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('get_config', () => {
    console.log('get_config');
    socket.emit('send_config', config)
  })

  socket.on('get_file_tree', function() {
    console.log('get folder tree')
    const tree = dirTree('C:/Users/Toby/Pictures');
    socket.emit('send_file_tree',tree)
  })

  socket.on('set_file_path', (m) => {
    console.log('set_file_path', m)
    const file = new FILE(m)
    file.on('newFile', function (p,f) {
      io.emit('new file', f);
    })
    config.file.set = true
    config.file.filepath = m
    socket.emit('confirm_file_path', config.file.filepath)
  })

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
