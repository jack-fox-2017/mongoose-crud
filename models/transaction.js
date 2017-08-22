var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'book'
  }]
}, {
  versionKey: false
})

var transactions = mongoose.model('transaction', transactionSchema);

module.exports = transactions;
