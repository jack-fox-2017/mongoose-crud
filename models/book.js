const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book
