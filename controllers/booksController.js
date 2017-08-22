const model = require('../models/Book')
// var objId = require('mongodb').ObjectId


const getBooks = (req,res) => {
  model.find()
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const getOneBook = (req,res) => {
  model.findOne({_id : req.params.id})
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const addBook = (req,res) => {
  model.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => (
    res.send(data)
  ))
  .catch(err => res.send(err))
}

const updateBook = (req,res) => {
  model.findOneAndUpdate({
    _id : req.params.id
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(() => (
    res.send('berhasil diupdate')
  ))
  .catch(err => res.send(err))
}

const deleteBook = (req,res) => {
  model.deleteOne({_id : req.params.id})
  .then(() => (
    res.send('berhasil dihapus satu data')
  ))
  .catch(err => res.send(err))
}

module.exports = {
  getBooks,
  getOneBook,
  addBook,
  updateBook,
  deleteBook
}
