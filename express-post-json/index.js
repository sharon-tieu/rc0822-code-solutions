const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.sendStatus(201);
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}~`);
});
