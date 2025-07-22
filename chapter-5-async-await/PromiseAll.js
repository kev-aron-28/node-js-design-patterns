function all(tasks = []) {
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) return resolve([]);

    const results = [];
    let completed = 0;

    tasks.forEach((task, index) => {
      Promise.resolve(task())
        .then(result => {
          results[index] = result;
          completed++;
          if (completed === tasks.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
