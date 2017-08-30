var mongoose = require('mongoose')
var schema = mongoose.Schema;

var transactionSchema = new schema({
  memberid: { type: schema.Types.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: schema.Types.ObjectId, ref: 'Bike'}]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
