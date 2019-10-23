require("babel-core/register");
require("babel-polyfill");
require("@babel/register")({
	presets: ["@babel/preset-env"]
});
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const db = require('./models/index')
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')
const familyRouter = require('./routes/family');
const patientRouter = require('./routes/patients');
const generalRouter = require('./routes/general_treatments');
const tbRouter = require('./routes/tb_treatments');
const dentalRouter = require('./routes/dental');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

dotenv.config()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: '*'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/families', familyRouter);
app.use('/patients', patientRouter);
app.use('/general', generalRouter);
app.use('/tb', tbRouter);
app.use('/dental', dentalRouter);

module.exports = app;
