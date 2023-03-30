const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./services/dataBase');
const Users = require('./models/users');
const Precatorys = require('./models/precatorys');
const FormsAnswers = require('./controllers/');
const Clients = require('./models/clients');
const Lawyers = require('./models/lawyers');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//Check connection
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.use('/users', require('./routes/users'));

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

sequelize
  .sync()
  .then((result) => {
    console.log('Database connected');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
