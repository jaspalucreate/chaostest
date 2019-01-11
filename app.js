require('newrelic');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const rollbar = require('rollbar');
const dotenv = require('dotenv');
dotenv.load();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

global.environmentServer = {
	Production: 'Production',
	Development: 'Development',
	Staging: 'Staging'
};

// error handler
rollbar.init(process.env.ROLLBAR_ACCESS_TOKEN, { environment: process.env.ENVIRONMENT });
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.status(err.status || 500);
  if (err.status == 500 && !req.xhr) {
      if (process.env.ENVIRONMENT != environmentServer.Development)
          rollbar.handleError(err, req);
      res.render('500', { layout: null });
  }
  else {
      if (process.env.ENVIRONMENT != environmentServer.Development)
          rollbar.handleError(err, req);
      if (req.xhr)
          res.status( err.http_code || 500).send('error')
  }
});

module.exports = app;
