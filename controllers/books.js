'use strict'
const Book = require('../models/book');
const index = (req,res) => {
  res.send('sudan masuk bookx')
}

const create = (req,res) => {
  var add = {
    isbn: `${req.body.isbn}`,
    title: `${req.body.title}`,
    author: `${req.body.author}`,
    category: `${req.body.category}`,
    stock: req.body.stock
  }
  Book.create(add)
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const read = (req,res) =>{
  Book.find({})
  .then((documents)=>{
    res.send(documents)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const update = (req,res) => {
  var update = {
    isbn: `${req.body.isbn}`,
    title: `${req.body.title}`,
    author: `${req.body.author}`,
    category: `${req.body.category}`,
    stock: req.body.stock
  }
  var id = {
    _id: req.params.id
  }

  Book.updateOne(id,{$set: update})
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const destroy = (req,res) => {
  var id = {
    _id: req.params.id
  }

  Book.deleteOne(id)
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  index,
  create,
  read,
  update,
  destroy
}
