'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library');

var bookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    stock: Number
})

var bookModel = mongoose.model('Books', bookSchema);


module.exports = {
    bookModel
}