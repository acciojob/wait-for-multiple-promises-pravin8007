function createRandomPromiseAndUpdateTable() {
  function createRandomPromise() {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(randomTime);
      }, randomTime * 1000);
    });
  }

  const promises = [createRandomPromise(), createRandomPromise(), createRandomPromise()];

  const outputTable = document.getElementById('output');

  const loadingRow = document.createElement('tr');
  const loadingCell = document.createElement('td');
  loadingCell.colSpan = 2;
  loadingCell.id = 'loading' ;
  loadingCell.textContent = 'Loading...';
  loadingRow.appendChild(loadingCell);
  outputTable.appendChild(loadingRow);

  Promise.all(promises)
    .then(times => {
      outputTable.removeChild(loadingRow);

      times.forEach((time, index) => {
        const row = document.createElement('tr');
        const promiseCell = document.createElement('td');
        const timeCell = document.createElement('td');
        promiseCell.textContent = `Promise ${index + 1}`;
        timeCell.textContent = time;
        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        outputTable.appendChild(row);
      });

      const totalTime = times.reduce((acc, curr) => acc + curr, 0);
      const totalRow = document.createElement('tr');
      const totalCell = document.createElement('td');
      const totalTimeCell = document.createElement('td');
      totalCell.textContent = 'Total';
      totalTimeCell.textContent = totalTime.toFixed(3);
      totalRow.appendChild(totalCell);
      totalRow.appendChild(totalTimeCell);
      outputTable.appendChild(totalRow);
    });
}

// Call the function whenever you want to generate random promises and update the table
createRandomPromiseAndUpdateTable();
