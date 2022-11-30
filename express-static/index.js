var express = require('express');
var app = express();
var path = require('path');

// use path.join() to combine _dirname and your public director's name ('public')into the absolute path to your public directory.
// put the return value into a variable.
// log the value.
const publicDirectoryPath = path.join(__dirname, 'public');
console.log('publicDirectoryPath:', publicDirectoryPath);

// create a middleware that will serve any files located in the public directory.
// put that in a variable.
const middleware = express.static(publicDirectoryPath);

// mount the middleware with app.use().
app.use(middleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('this server is listening on port 3000~');
});
