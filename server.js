const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const adminRoutes = require('./routes/admin');

const homeRouter = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/admin', adminRoutes);

app.get('/', homeRouter);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
