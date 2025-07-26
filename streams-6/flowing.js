process.stdin
  .on('data', (chunk) => {
    console.log('New data'); 

    console.log(`Chunk read ${chunk.length}: ${chunk.toString()}`);
  })
  .on('end', () => console.log('End of stream'));
