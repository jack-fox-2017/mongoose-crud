const mongoose = require('mongoose')

let transactionSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: {
    type: Date,
    default: null
  },
  fine: Number,
  bookList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

module.exports = mongoose.model('Transaction', transactionSchema)
