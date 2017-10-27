var Clock = require('./main.js');  
var clock = Clock();

clock.on('tic', function(t) {  
  console.log('tic:', t);
});

clock.on('toc', function(t) {  
  console.log('toc:', t);
});

clock.start();

// stop the clock 10 seconds after
setTimeout(function() {  
  clock.stop();
}, 10e3)