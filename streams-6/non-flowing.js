
process.stdin
  .on('readable', () => {
    console.log('New data');
    let chunk;
    while((chunk = process.stdin.read()) !== null) {
      console.log(`Reading chunck ${chunk.length}: ${chunk.toString()}`);
    }
  })
  .on('end', () => {
    console.log('END OF STREAM');
  });
