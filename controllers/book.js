const bookModel = require('../models/book')
const ObjectId = require('mongodb').ObjectId

var getAll = (req, res) => {
  bookModel.find()
  .then(dataBooks => {
    res.send(dataBooks)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  bookModel.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(() => {
    res.send('data added')
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteData = (req, res) => {
  bookModel.remove({
    _id: ObjectId(req.params.id)
  })
  .then(() => {
    res.send('data removed')
  })
  .catch(err => {
    res.send(err)
  })
}

var editData = (req, res) => {
  bookModel.update({
    _id: ObjectId(req.params.id)
  },
  {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(() => {
    res.send('data updated')
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAll,
  insertData,
  deleteData,
  editData
}
