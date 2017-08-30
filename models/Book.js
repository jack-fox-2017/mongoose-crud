var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/library');

const bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

const modelBook = mongoose.model('books', bookSchema)

module.exports = modelBook
