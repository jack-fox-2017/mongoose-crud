'use strict'

const transaction = require('../models/transactions');

exports.findTransactions = (req, res) => {
  transaction.transactionModel.find({}).
    populate('customerid bookid')
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

exports.findOne = (req, res) => {
  transaction.transactionModel.findOne({
      _id: req.params.id
  }).
    populate('customerid bookid')
    .then(data => {
      res.send(data)
    })
}

exports.addTransaction = (req, res) => {
  transaction.transactionModel.create({
      customerid: req.body.memberid,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: req.body.in_date,
      fine: req.body.fine,
      bookid: req.body.booklist
    })
    .then(data => {
      res.send(data)
    })
}

exports.editTransaction = (req, res) => {
  transaction.transactionModel.updateOne({
      _id: req.params.id
    }, {
      customerid: req.body.memberid,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: req.body.in_date,
      fine: req.body.fine,
      bookid: req.body.booklist
    })
    .then(data => {
      res.send(data)
    })
}

exports.deleteTransaction = (req, res) => {
  transaction.transactionModel.deleteOne({
      _id: req.params.id
    })
    .then(data => {
      res.send(data)
    })
}