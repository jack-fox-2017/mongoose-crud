var mongoose = require('mongoose')
var schema = mongoose.Schema;

var bookSchema = new schema({
  isbn: String,
  tittle: String,
  author: String,
  category: String,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = {
  Book
};
