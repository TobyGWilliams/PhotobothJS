var countdown = require('./countdown.js')

var c = new countdown

c.on('tick', (e)=>{
    console.log('tick', e)
})

c.on('tick-final', (e)=>{
    console.log('tick-final', e)
})

c.start(5)