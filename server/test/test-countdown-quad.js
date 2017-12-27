console.log('Countdown Quad Test')

const EventEmitter = require('events')
const CountdownQuad = require('./countdown-quad.js')

var emitter = new EventEmitter()
var countQ = new CountdownQuad(emitter)


// countQ.multiplePictures(10)
countQ.start()
