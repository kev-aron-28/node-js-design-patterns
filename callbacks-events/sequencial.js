function asyncOp(cb) {
  cb();
}

function task1(cb) {
  asyncOp(() => {
    task2(cb)
  })
}

function task2(cb) {
  asyncOp(() => {
    task3(cb)
  })
}

function task3(cb) {
  asyncOp(() => {
    cb()
  })
}

task1(() => {
  console.log('DONE')
})
