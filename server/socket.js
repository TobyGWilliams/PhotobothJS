function Socket (){ }

Socket.prototype.connect = function(s) {
    var io = require('socket.io').listen(s);
    console.log('socket created')
    
    io.on('connection', function(socket){
        console.log('a user connected');

        socket.on('disconnect', function(){
          console.log('user disconnected');
        });
    
        socket.on('getConfig', function(){
            console.log('getConfig')
        });  
      
    });
}

Socket.prototype.listen_countdown = function(c) {
    c.on('tick', (e) => {
        console.log('socket.js', 'tick', e)
    })
    c.on('tick-final', (e) => {
        console.log('socket.js','final-tick', e)
    })
}

module.exports = Socket