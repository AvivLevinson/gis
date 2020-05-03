const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const adminRoutes = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/admin', adminRoutes);

app.use('/', (req, res, next) => {
  console.log('entery point');
  res.render('index');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send(err.message);
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
