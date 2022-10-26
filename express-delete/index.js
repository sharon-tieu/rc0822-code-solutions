const express = require('express');
const app = express();

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

app.get('/api/grades', (req, res) => {
  const data = [];
  for (const key in grades) {
    data.push(grades[key]);
  }
  res.json(data);
});

app.delete('/api/grades/:id', (req, res) => {
  // console.log('req.params:', req.params);
  // console.log('req.params.id:', req.params.id);
  delete grades[req.params.id];
  res.sendStatus(204);
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}~`);
});
