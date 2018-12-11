import gpio from 'rpi-gpio';
import EventEmitter from 'events';

export class Button {
  constructor(pin) {
    this.emitter = new EventEmitter();
    this.pin = pin;
    this.listening = true;

    gpio.on('change', (c, v) => {
      if (v == true && this.listening == true) {
        this.emitter.emit('button-press');
        this.listening = false;
        setTimeout(() => {
          this.listening = true;
        }, 10000);
      }
    });
    gpio.setup(this.pin, gpio.DIR_IN, gpio.EDGE_BOTH);
  }
}

module.exports = Button;
