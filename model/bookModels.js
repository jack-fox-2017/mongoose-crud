var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  createdAt: Date,
  updatedAt: Date
});

var bookModels = mongoose.model('Book', BookSchema);

module.exports = bookModels
