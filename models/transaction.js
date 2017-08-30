'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
  memberid: {type: Schema.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: {type: Date},
  due_date: {type: Date},
  in_date: {type: Date},
  fine: {type: Number},
  booklist: [{type: Schema.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
