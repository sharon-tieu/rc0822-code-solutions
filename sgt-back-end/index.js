const express = require('express');
const app = express();
app.use(express.json());

const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  SELECT *
  FROM grades
  `;
  db.query(sql)
    .then(result => {
      return res.json(result.rows);
    })
    .catch(err => {
      if (err) {
        // console.log(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      }
    });
});

app.post('/api/grades', (req, res) => {
  // return res.json(req.body);
  // Line 37 is "object destructuring"
  // const {
  //   name,
  //   course,
  //   score
  // } = req.body;
  const inputName = req.body.name;
  const inputCourse = req.body.course;
  const inputScore = Number(req.body.score);
  if (inputName === '' || inputCourse === '' || inputScore === '') {
    return res.status(400).json({
      error: 'Invalid/Missing name, course, or score.'
    });
  }
  if ((!inputScore > 0 && !inputScore < 100)) {
    return res.status(400).json({
      error: 'Score must be an integer from 0 to 100.'
    });
  }
  const sql = `
    INSERT INTO "grades" ("name", "score", "course")
    VALUES ($1, $2, $3)
    `;
  // console.log(sql);
  const params = [inputName, inputScore, inputCourse];
  db.query(sql, params)
    .then(result => {
      return res.json({
        message: 'Success.'
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const inputName = req.body.name;
  const inputCourse = req.body.course;
  const inputScore = req.body.score;
  if (inputName === '' || inputCourse === '' || inputScore === '') {
    return res.status(400).json({
      error: 'Invalid/Missing name, course, or score.'
    });
  }
  if (isNaN(Number(inputScore) || inputScore < 0 || inputScore > 100)) {
    return res.status(400).json({
      error: 'Score must be an integer from 0 to 100.'
    });
  }
  // const gradeId = Number(req.params.gradeId);
  const sql = `
    UPDATE "grades"
    SET "name" = $1,
        "course" = $2,
        "score" = $3
    WHERE "gradeId" = $4
    RETURNING *
  `;
  db.query(sql)
    .then(result => {
      return res.json(
        result.rows[0]
      );
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId)) {
    return res.status(400).json({
      error: 'Invalid gradeId.'
    });
  }
  let sql = `
    SELECT *
    FROM "grades"
    WHERE "gradeId" = $4
  `;
  db.query(sql)
    .then(result => {
      if (!result.rows.length) {
        return res.status(404).json({
          error: `gradeId ${gradeId} does not exist.`
        });
      }
    });
  sql = `
    DELETE FROM "grades"
    WHERE "gradeId" = $4
  `;
  db.query(sql)
    .then(result => {
      return res.json({
        message: `Deletion of gradeId ${gradeId} was successful.`
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.listen(3000, () => {
  // console.log('listening on port 3000');
});
