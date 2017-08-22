const model = require('../models/library');

var selectAllBooks = (req, res) => {
  model.bookModel.find({}, (err, docs) => {
    if(!err){
      console.log(docs);
      res.send(docs)
    }else{
      res.send(err)
    }
  })
}

var selectBookById = (req, res) => {
  model.bookModel.findById(req.params.id, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var insertNewBook = (req, res) => {
  model.bookModel.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    stock: req.body.stock,
    category: req.body.category
  },(err, docs) => {
    if(!err){
      console.log(docs);
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var deleteBook = (req, res) => {
  model.bookModel.remove({
    _id: req.params.id
  },(err,docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var updateBook = (req, res) => {
  model.bookModel.findByIdAndUpdate(req.params.id,
  {
    $set :{
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      stock: req.body.stock,
      category: req.body.category
    }
  },(err, docs) => {
    if(!err){
      console.log(docs);
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllBooks,
  selectBookById,
  insertNewBook,
  deleteBook,
  updateBook
}
