var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
