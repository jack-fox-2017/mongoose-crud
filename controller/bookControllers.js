var modelBook = require('../model/bookModels')

var createBook = function(req, res){
  book = new modelBook();
  book.isbn = req.body.isbn
  book.title = req.body.title
  book.author = req.body.author
  book.category = req.body.author
  book.stock = req.body.stock

  book.save(function(err){
    if(!err){
      res.send(book)
    }
    else {
      res.send(err)
    }
  })
}

var readBook = function(req, res){
  modelBook.find(function(err, data){
    if(!err)
    {
      res.send(data)
    }
    else {
      res.send(err)
    }
  })
}

var updateBook = function(req, res){
  modelBook.findByIdAndUpdate(
  {
    _id:req.params.id
  },{
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock,
  })
  .then(data=>{
    res.send(data)
  })
}

var deleteBook = function(req, res){
  modelBook.findByIdAndRemove({
    _id:req.params.id
  })
  .then(()=>{
    res.send('data deleted')
  })
}

module.exports = {
  createBook,
  readBook,
  updateBook,
  deleteBook
}
