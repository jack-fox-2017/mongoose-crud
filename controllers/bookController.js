const Book = require('../models/book')

let addBook = (req, res) => {
  Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, (err, book) => {
    if(err) throw res.status(500).send(err)
    res.send({msg: 'Adding book success!'})
  })
}

let getAll = (req, res) => {
  Book.find((err, book) => {
    if(err) throw res.status(500).send(err)
    res.send(book)
  })
}



module.exports = {
  addBook,
  getAll
};
