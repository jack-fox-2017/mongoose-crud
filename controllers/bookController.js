const Book = require('../models/book');

var findAll = (req, res) => {
  Book.find({})
  .then(result => res.send(result))
}

var create = (req, res) => {
  var data = {
    isbn: req.body.isbn,
    title: req.body.title,
    author:req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }
  Book.create(data)
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var findOne = (req, res) => {
  Book.findById({_id: req.params.id})
  .then(data=>  res.send(data))
  .catch(err => res.send(err))
}

var putOne = (req, res) => {
  Book.findById({_id: req.params.id})
  .then(data=> {
    var data = {
      isbn: req.body.isbn || data.isbn,
      title: req.body.title || data.title,
      author:req.body.author || data.author,
      category: req.body.category || data.category,
      stock: req.body.stock || data.stock
    }
    Book.update({_id: req.params.id},{ $set: data})
    .then(() => res.send('data updated'))
    .catch(err => res.send(err))
  })
  .catch(err => res.send(err))
}

var remove = (req, res) => {
  Book.remove({_id: req.params.id})
  .then(()=> res.send('data deleted'))
  .catch(err => res.send(err))
}


module.exports = {
  findAll, create, findOne, putOne, remove
}
