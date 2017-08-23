const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var url = 'mongodb://localhost/library';
mongoose.connect(url);
//Get the default connection
var db = mongoose.connection;
//get connect and notification of connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var books = require('./router/book')
var transactions = require('./router/transaction')
var customers = require('./router/customer')

app.use('/book', books)
app.use('/transaction', transactions)
app.use('/customer', customers)

app.listen(3000)
