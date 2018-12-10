console.log('Countdown Test Script');

const Countdown = require('../countdown.js');

const countdown = new Countdown();

// switch for emitter logging
if (true) {
  countdown.emitter.on('tick', (d) => {
    console.log('tick', d);
  });

  countdown.emitter.on('tick-final', (d) => {
    console.log('tick-final', d);
  });
}

countdown.start(4, 8, 3);
