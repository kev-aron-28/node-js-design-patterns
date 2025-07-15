const tasks = []

let concurrency = 2
let running = 0
let index = 0
let completed 

function next() {
  while(running < concurrency && index < tasks.length) {
    const task = tasks[index++];

    task(() => {
      if(++completed == tasks.length) {
        done();
      }

      running--;

      next()
    });

    running++
  }
}

next()
