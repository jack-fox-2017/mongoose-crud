'use strict'
//All Dependencies
const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      //All Route Files
      routes = require('./routes/index'),
      books = require('./routes/books'),
      transaction = require('./routes/transaction'),
      customer = require('./routes/customer'),

      //Express Instance
      app = express();

//load environment variables with dotenv
require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/library')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', routes);
app.use('/api/books', books);
app.use('/api/customer', customer);
app.use('/api/transaction', transaction);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
