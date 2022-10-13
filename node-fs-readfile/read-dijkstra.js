// imports the 'fs' module (Line 2)
const fs = require('fs');

// uses fs.readFile to read the contents of dijkstra.txt
fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
