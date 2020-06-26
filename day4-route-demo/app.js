var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRoute = require('./controller/index');
var userRoute = require('./routes/users');
var app = express();

function getCurrentTime() {
  return new Date();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexRoute.getDate);

app.get('/view', function (req, res) {
  return res.render('view', { date: getCurrentTime() });
});

app.post('/', function (req, res) {
  return res.send(req.body);
});

app.get('/test', function (req, res) {
  return res.send('hello test');
});

// app.get('/:username', function (req, res) {
//   return res.send(req.params);
// });

// abbbbc
//ab

app.use('/user', userRoute);

app.get('/ab*c', function (req, res) {
  return res.send(req.path);
});

app.get('/:type(signup|signin)', function (req, res) {
  return res.send(req.path);
});

app.get('/*', function (req, res) {
  return res.send(req.path);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
