const model = require('../model/book');

var insertbook = (req,res) => {
  model.create({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getallbook = (req,res) => {
  model.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getonebook = (req,res) => {
  model.find({_id : req.params.id})
  .then(book => {
    res.send(book)
  })
  .catch(err => {
    res.send(err)
  })
}

var updatebook = (req,res) => {
  model.update({_id : req.params.id},{
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  .then(book => {
    res.send(book)
  })
  .catch(err => {
    res.send(err)
  })
}

var deletebook = (req,res) => {
  model.deleteOne({_id : req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {insertbook,
getallbook, getonebook, updatebook, deletebook};
