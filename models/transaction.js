const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  memberid: {type: mongoose.Schema.Types.ObjectId, ref: 'customers'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{type: mongoose.Schema.Types.ObjectId, ref: 'books'}]
})

const Transaction = mongoose.model('transactions', transactionSchema)

module.exports = Transaction
