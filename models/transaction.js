const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  memberid: {type: Schema.Types.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{type: Schema.Types.ObjectId, ref: 'Book'}]
}, {
  timestamps: true
});

let Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
