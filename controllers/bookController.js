'use strict'

const Books = require('../models/books');

exports.findBooks = (req, res) => {
  Books.bookModel.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

exports.findOne = (req, res) => {
  Books.bookModel.findOne({
      _id: req.params.id
    })
    .then(data => {
      res.send(data)
    })
}

exports.addBook = (req, res) => {
  Books.bookModel.create({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => {
    res.send(data)
  })
}

exports.editBook = (req, res) => {
  Books.bookModel.updateOne({
    _id: req.params.id
  }, {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => {
    res.send(data)
  })
}

exports.deleteBook = (req, res) => {
  Books.bookModel.deleteOne({
    _id: req.params.id
  })
    .then(data => {
      res.send(data)
    })
}