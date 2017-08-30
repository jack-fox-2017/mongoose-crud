'use strict'

const Transaction = require('../models/transactions')
// var mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

function addDate(now,days) {
  var nowadded = new Date().setTime(now.getTime() + (days*24*60*60*1000));
  return nowadded;
}
module.exports = {
  create: function (req,res) {
    var now = new Date();
    Transaction.create({
      days : req.body.days,
      memberid: req.body.memberid,
      out_date: new Date(),
      due_date: addDate(now,req.body.days),
      in_date: null,
      fine: null,
      booklist: req.body.booklist
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findAll: function (req,res) {
    Transaction.find()
    .populate('memberid booklist')
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findOne: function (req,res) {
    Transaction.findById({_id: ObjectId(`${req.params.id}`)})
    .populate('memberid booklist')
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  delete: function (req,res) {
    Transaction.deleteOne({_id: ObjectId(`${req.params.id}`)})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  update: function (req,res) {
    // console.log();
    Transaction.updateOne({_id: ObjectId(`${req.params.id}`)},
        { $set:
          {
            in_date: new Date(),
            fine: req.body.fine
          }
    })
    // .populate('memberid', 'booklist')
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
}
