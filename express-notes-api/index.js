const fs = require('fs'); // updates data.json file
const express = require('express');
const notesData = require('./data.json');
const app = express();
// console.log('notesData:', notesData);

// client can GET notes function
app.get('/api/notes', (req, res) => {
  const data = [];
  for (const entry in notesData) {
    data.push(notesData[entry]);
  }
  res.json(data);
});

// client can GET notes BY ID function
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) === false) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (notesData.notes[id]) {
    res.json(notesData.notes[id]);
  } else {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
  }
});

// client can POST new note

app.use(express.json()); // creates a new middleware to the app

app.post('/api/notes', (req, res) => {
  const data = notesData;
  // console.log('data.nextId:', data.nextId++);
  const newNoteObj = {};

  const id = notesData.nextId;
  newNoteObj.id = id;
  newNoteObj.content = req.body.content;
  // console.log('req.body:', req.body);

  if (req.body.content === undefined) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else {
    data.notes[data.nextId] = newNoteObj;

    data.nextId++;

    // console.log('data', data);

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        // this deletes the new note from data in memory to fix the bug in the program
        delete data.notes[id];
        // if an error occurs (note is not posted): send error
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(201).json(newNoteObj);
      }
    });
  }
});

// client can DELETE a note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  // console.log('req.params.id:', id);
  // console.log('typeof req.params.id:', typeof id);
  // console.log('notesData[req.params.id]:', notesData[req.params.id]);

  if (Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id !== notesData[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete notesData[req.params.id];
    res.status(204).json();
  }
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}~`);
});

// funtion handleErrors(req, res) {
//   if (!notesData.notes[req.params.id] && isNaN(req.params.id)) {
//     res.status(400).json({ })
//   }
// }
