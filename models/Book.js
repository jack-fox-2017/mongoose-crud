const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

module.exports = mongoose.model('Book', bookSchema)
