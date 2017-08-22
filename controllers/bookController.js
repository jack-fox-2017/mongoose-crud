'use strict'

const Book = require('../models/books')
// var mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
module.exports = {
  create: function (req,res) {
    Book.create({
      isbn : req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findAll: function (req,res) {
    Book.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findOne: function (req,res) {
    Book.findById({_id: ObjectId(`${req.params.id}`)})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  delete: function (req,res) {
    Book.deleteOne({_id: ObjectId(`${req.params.id}`)})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  update: function (req,res) {
    Book.updateOne({_id: ObjectId(`${req.params.id}`)},
        { $set:
          {
          isbn : req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
          }
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
}
