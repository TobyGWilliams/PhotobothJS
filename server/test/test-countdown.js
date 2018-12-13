import {Countdown} from '../countdown';

const countdown = new Countdown(8, 4, 3);
countdown.emitter.on('countdown-start', (e) =>
  console.log('countdown-start', e)
);
countdown.emitter.on('countdown-finish', (e) => {
  console.log('countdown-finish', e);
});
countdown.emitter.on('countdown-tick', (e) => {
  console.log('countdown-tick', e);
});
countdown.emitter.on('countdown-tick-final', (e) => {
  console.log('countdown-tick-final', e);
});
countdown.start();
