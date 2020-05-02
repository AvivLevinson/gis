const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const trace = require('./utils/trace');

const geoIp = require('./utils/geoIP');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/postData', (req, res, next) => {
  trace('google.co.il');
  console.log(`backend nodejs: ${req.body.url} `);
  res.status(200);
  res.redirect('/');
});

app.get('/getData', trace);
app.use((req, res, next) => {});

app.use('/', (req, res, next) => {
  console.log('entery point');
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
