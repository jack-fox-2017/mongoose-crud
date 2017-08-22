const bookModel = require('../models/book');

//bookModel.find(function (err, docs) {console.log(docs)});
var getBooks = (req, res)=>{
  bookModel.find((err, books)=>{
    if(err) res.send(err);
    else res.json(books);
  })
}

var getBook = (req, res)=>{
  bookModel.findById(req.params.id,(err, book)=>{
    if(err) res.send(err);
    else res.json(book);
  });
}

var createBook = (req, res)=>{
  bookModel.create(req.body, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

var updateBook = (req, res)=>{
  bookModel.findByIdAndUpdate(req.params.id, req.body, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

var removeBook = (req, res)=>{
  bookModel.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  removeBook
}
