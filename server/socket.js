function Socket (emitter, server){
    this.emitter = emitter
    console.log('socket.js')

    this.io = require('socket.io').listen(server);
    this.io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('disconnect', function(){
          console.log('user disconnected');
        });
        
        this.emitter.on('tick', (e) => {
            socket.emit('tick', e)
        })

        this.emitter.on('tick-start', (e) => {
            socket.emit('tick-start', e)
        })
    
        this.emitter.on('tick-final', (e) => {
            socket.emit('tick-final', e)
        })

        this.emitter.on('file-new', (e) => {
            socket.emit('file-new', e)
        })

        this.emitter.on('dropbox-newURL', (e) => {
            socket.emit('dropbox-newURL', e)
        })

    });

    
 }


module.exports = Socket