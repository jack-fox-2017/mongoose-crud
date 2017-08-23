const Books = require('../model/book')

var getAllData = (req, res)=>{
  Books.find()
  .then((books)=>{
    res.send(books)
  })
  .catch(err=>{
    res.send(err)
  })
}

var insertData= (req, res)=>{
  Books.create({
    title : req.body.title,
    author : req.body.author,
    category: req.body.category,
    stock : req.body.stock
  })
  .then(()=>{
    res.send("Sucess Add Books")
  })
  .catch(err=>{
    res.send(err)
  })
}

var findId = (req, res)=>{
  Books.findById({_id:req.params.id})
  .then((book)=>{
    res.send(book)
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateData = (req, res)=>{
  Books.findById(req.params.id)
  .then((book)=>{
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.category= req.body.category || book.category
    book.stock = req.body.stock || book.stock

    book.save((err, data) => {
      if (err) {
        res.status(500).send(err)
      }
      res.send(data)
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

var deleteData = (req, res)=>{
  Books.findByIdAndRemove({_id:req.params.id})
  .then(()=>{
    res.send("Success deleted")
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getAllData, insertData, findId, updateData, deleteData
}
