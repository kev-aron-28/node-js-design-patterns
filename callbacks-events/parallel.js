const tasks = []

let completed = 0

tasks.forEach((task) => {
  task(() => {
    if(++completed == tasks.length) {
      done();
    }
  })
})

function done() {
  
}
