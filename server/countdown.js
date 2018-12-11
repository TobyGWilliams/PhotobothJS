import EventEmitter from 'events';

export class Countdown {
  constructor(initialCountdown, numberOfPhotos, intermediateCountdown) {
    this.emitter = new EventEmitter();
    this.initialCountdown = initialCountdown;
    this.numberOfPhotos = numberOfPhotos;
    this.intermediateCountdown = intermediateCountdown;
  }

  start() {
    const callback = () => {
      if (this.timings.length == 0) {
        clearInterval(this.timer);

        this.emitter.emit('countdown-finish', {
          count: this.timings[0],
          numberOfPhotos: this.timings.length,
        });
        return;
      }
      if (this.timings[0] == 0) {
        this.emitter.emit('countdown-tick-final', {
          count: this.timings[0],
          numberOfPhotos: this.timings.length,
        });
        this.timings.shift();
        return;
      }
      this.emitter.emit('countdown-tick', {
        count: this.timings[0],
        numberOfPhotos: this.timings.length,
      });
      this.timings[0] -= 1;
      return;
    };

    // set up the data to be iterated over
    this.timings = new Array(this.numberOfPhotos);
    this.timings.fill(this.intermediateCountdown);
    this.timings[0] = this.initialCountdown;

    this.emitter.emit('countdown-start');

    // evaluate the timings array every second
    this.timer = setInterval(callback, 1000);
  }
}
