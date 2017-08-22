var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/adminlibrary');

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

// the schema is useless so far
// we need to create a model using it
var books = mongoose.model('books', bookSchema);

// make this available to our users in our Node applications
module.exports = books;
