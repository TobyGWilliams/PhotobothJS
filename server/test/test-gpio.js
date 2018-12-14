const IO = require('../gpio.js');

let gpio = new IO(12); // pin 12, GPIO18

gpio.emitter.on('button-press', () => {
  console.log('button press');
});
