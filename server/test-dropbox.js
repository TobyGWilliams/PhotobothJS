const config = require('./config.json')
const Dropbox = require('./dropbox.js')

console.log(config)

var dropbox = new Dropbox(config.dropboxToken)


setTimeout(()=>{}, 10000)