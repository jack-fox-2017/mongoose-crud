'use strict'

const mongoose = require('mongoose');

const booksSchema =  new  mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
})

var Book = mongoose.model('Book', booksSchema );

module.exports = Book
