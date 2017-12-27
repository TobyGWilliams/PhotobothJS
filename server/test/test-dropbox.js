const config = require('./config.json')
const Dropbox = require('./dropbox.js')
const EventEmitter = require('events')

var emitter = new EventEmitter()

var dropbox = new Dropbox(emitter, config.dropboxToken, config.file_path)
  

emitter.on('dropbox-uploadSuccess',() =>{
    console.log('dropbox-uploadSuccess')
})
emitter.on('dropbox-newURL', (r) =>{
    console.log('dropbox-newURL', r)
})

emitter.on('dropbox-login-success', () => {
    emitter.emit('file-new', 'img0004.jpg')
})




setTimeout(()=>{}, 30000)