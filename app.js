const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');
require('dotenv').config()
    
mongoose.connect('mongodb://localhost/library2', err => {
  if(err) throw err
  console.log("Connect to Database");
})
    
const index = require('./routes/index');
const books = require('./routes/books');
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || 3000);
