var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transSchema = new Schema({
  customerId: {type: Schema.Types.ObjectId, ref: 'customer'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist:[{type: Schema.Types.ObjectId, ref: 'book'}]
});

var transaction = mongoose.model('transaction', transSchema);

module.exports = transaction;
