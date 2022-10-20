var express = require('express');
var app = express();

// app.use(function (req, res, next) {this
//   // eslint-disable-next-line no-console
//   console.log('Time:', Date.now());
//   next();
// });

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('hello world! uwu');
  // req.method();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('this server is listening on port 3000~');
});
