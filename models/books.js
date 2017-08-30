'use strict'



var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
    isbn : String,
    title: String,
    author: String,
    category: String,
    stock: Number
    // stories: {
    //   objectId ref:stories
    // }
});

//create model
var Book = mongoose.model('books', BookSchema);

module.exports = Book;
