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
  Book.find((err, books) => {
    if(err) throw res.status(500).send(err)
    res.send(books)
  })
}

let getBookById = (req, res) => {
  let id = req.params.id
  Book.findById(id, (err, book) => {
    if(err) throw res.status(500).send(err)
    res.send(book)
  })
}

// let updateBook = (req, res) => {
//   let id = req.params.id
//   Book.findByIdAndUpdate(id, {$set: 
//     {
//       isbn: req.body.isbn,
//       title: req.body.title,
//       author: req.body.author,
//       category: req.body.category,
//       stock: req.body.stock
//     }
//   }, 
//     (err, book) => {
//       console.log(book);
//     if(err) throw res.status(500).send(err)
//     res.send(book)
//   })
// }

let updateBook = (req, res) => {
  let id = req.params.id
  Book.findById(id, (err, book) => {
    Book.update({
      _id: book._id
    },{
      $set: 
        {
          isbn: req.body.isbn || book.isbn,
          title: req.body.title || book.title,
          author: req.body.author || book.author,
          category: req.body.category || book.category,
          stock: req.body.stock || book.stock
        }
      }, (err, result) => {
        if(err) return res.send(err.message)
        res.send(result)
    })
  })
}
    

let deleteBook = (req, res) => {
  let id = req.params.id
  Book.deleteOne({_id: id}, (err, book) => {
    if(err) throw res.status(500).send(err)
    res.send('Deleting book success!')
  })
}


module.exports = {
  addBook,
  getAll,
  getBookById,
  updateBook,
  deleteBook
};
