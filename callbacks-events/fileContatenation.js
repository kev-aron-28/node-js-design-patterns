import { appendFileSync, readFile, readFileSync, writeFileSync } from "node:fs";

function contactFiles(files = [], dest = 'output.txt', cb) {
  if(files.length == 0) return cb();

  files.forEach(file => {
    const content = readFileSync(file, 'utf-8');
    appendFileSync(dest, content)
  });

  return cb();
}

contactFiles(['A.txt', 'B.txt'], 'output.txt', () => {
  console.log('TERMINADO');
});


function contactFiles(files = [], dest = 'output.txt', cb) {
  function processFile(index) {
    if (index >= files.length) return process.nextTick(cb);

    readFile(files[index], 'utf-8', (err, content) => {
      if (err) return cb(err);

      appendFile(dest, content, (err) => {
        if (err) return cb(err);

        processFile(index + 1);
      });
    });
  }

  processFile(0);
}
