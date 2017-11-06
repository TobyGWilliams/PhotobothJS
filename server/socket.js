function Socket (emitter, server){
    this.emitter = emitter
    console.log('socket.js')

    this.io = require('socket.io').listen(server);
    this.io.on('connection', function(socket){
        console.log('a user connected');

        socket.on('disconnect', function(){
          console.log('user disconnected');
        });
    
        socket.on('getConfig', function(){
            console.log('getConfig')
        });  
        
        this.emitter.on('tick', (e) => {
            socket.emit('tick', e)
        })
    
        this.emitter.on('tick-final', (e) => {
            socket.emit('tick-final', e)
        })

    });

    
 }


module.exports = Socket