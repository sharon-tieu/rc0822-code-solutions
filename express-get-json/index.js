const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}~`);
});

app.get('/api/grades', function (req, res) {
  const data = [];
  for (const key in grades) {
    data.push(grades[key]);
  }
  console.error(data);
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
