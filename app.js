var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// connection
//Set up default mongoose connection
//var mongoDB = 'mongodb://localhost/library';

var mongoDB = 'mongodb://1771911:alfandiki91@cluster0-shard-00-00-bqolv.mongodb.net:27017,cluster0-shard-00-01-bqolv.mongodb.net:27017,cluster0-shard-00-02-bqolv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'


mongoose.connect(mongoDB);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var index = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books');
var customers = require('./routes/customers');
var transactions = require('./routes/transaction');

app.use('/', index);
app.use('/users', users);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);

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
