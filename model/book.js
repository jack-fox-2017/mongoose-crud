var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var booksSchema = new Schema({
  title: String,
  author: String,
  category: String,
  stock: Number
});

// Compile model from schema
var Books = mongoose.model('books', booksSchema );

module.exports = Books
