import EventEmitter from 'events';

const displayData = (timings, numberOfPhotos) => {
  const position = numberOfPhotos - timings.length;
  const output = new Array(position);

  output.fill(null);
  timings.forEach((element) => {
    output.push(element);
  });

  return output;
};

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
        this.emitter.emit(
          'countdown-finish',
          displayData(this.timings, this.numberOfPhotos)
        );
        return;
      }

      if (this.timings[0] == 0) {
        this.emitter.emit(
          'countdown-tick-final',
          displayData(this.timings, this.numberOfPhotos)
        );
        this.timings.shift();
        return;
      }

      this.emitter.emit(
        'countdown-tick',
        displayData(this.timings, this.numberOfPhotos)
      );
      this.timings[0] -= 1;
      return;
    };

    // set up the data to be iterated over
    this.timings = new Array(this.numberOfPhotos);
    this.timings.fill(this.intermediateCountdown);
    this.timings[0] = this.initialCountdown;

    this.emitter.emit(
      'countdown-start',
      displayData(this.timings, this.numberOfPhotos)
    );

    // evaluate the timings array every second
    this.timer = setInterval(callback, 1000);
  }
}
