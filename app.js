var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', (err) => {
  if(err) console.log(err);
  console.log(' ========== MongoDB  Running ========== ');
})
var index = require('./routes/index');
var book = require('./routes/book');
var customer = require('./routes/customer');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/books', book);
app.use('/customers', customer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
