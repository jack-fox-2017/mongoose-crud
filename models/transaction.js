const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = Schema({
  memberid: {type: Schema.Types.ObjectId, ref :"customers"},
  days: Number,
  out_date: String,
  due_date: String,
  in_date: String,
  fine: Number,
  booklist:[{type: Schema.Types.ObjectId, ref :"books"}]
});

const modelTransaction = mongoose.model('transactions', transactionSchema);

module.exports = modelTransaction
