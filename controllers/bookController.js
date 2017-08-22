var books = require('../models/book')

function findAllBook (req, res){
  books.find({}, function(err, result){
    if(err){
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

function findByIdBook (req,res){
  books.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addBook (req, res){
  books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteByIdBook(req, res){
  books.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateByIdBook(req, res){
  books.findOneAndUpdate({
    _id: req.params.id
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllBook,
  findByIdBook,
  addBook,
  deleteByIdBook,
  updateByIdBook
}
