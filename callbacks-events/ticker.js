const EventEmitter = require('events');

function ticker(num, cb) {
  const emitter = new EventEmitter();
  let ticks = 0;

  const interval = setInterval(() => {
    emitter.emit('tick');
    ticks++;
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    cb(ticks);
  }, num);

  return emitter;
}


const emitter = ticker(500, (count) => {
  console.log('FINISHED ' + count);
});

emitter.on('tick', () => {
  console.log('TICK')
});
