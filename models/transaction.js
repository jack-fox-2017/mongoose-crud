var mongoose = require('mongoose')
var schema = mongoose.Schema;

var transactionSchema = new schema({
  memberid: { type: Schema.Types.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book'}]
});

var Transaction = mongoose.model('Transaction', bookSchema);

module.exports = Transaction
