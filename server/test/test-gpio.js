import {Button} from '../gpio';

let gpio = new Button(12); // pin 12, GPIO18

gpio.emitter.on('button-press', () => {
  console.log('button press');
});
