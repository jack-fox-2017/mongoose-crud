const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  isbn: {type: String, default: '000-000000-000'},
  title: {type: String, default: 'Untitled Book'},
  author: {type: String, default: 'no Name'},
  category: {type: String, default: 'uncategorized'},
  stock: Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Student;
