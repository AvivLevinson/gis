const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/postData', (req, res, next) => {
  console.log(`backend nodejs: ${req.body.data} `);
  res.status(200);
});

app.get('/getData', (req, res, next) => {
  console.log('app.get');
  res.send('hello from server');
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error('1' + err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
