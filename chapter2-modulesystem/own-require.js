const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadModule(filename, myModule, require) {
  const code = fs.readFileSync(filename, 'utf-8');
  
  const wrappredSource = `
    ( function(myModule, exports, require)  {
      ${code}
    })
  `

  console.log(wrappredSource)

  const script = new vm.Script(wrappredSource, { filename });

  const func = script.runInThisContext(); // execs wrapper as function

  func(myModule, myModule.exports, require);
}

const myModule = { exports: {} };

const fileName = path.resolve(__dirname, './test.js');

loadModule(fileName, myModule, require);

console.log(myModule);

