var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var transSchema = new Schema({
  memberid : [{type: Schema.Types.ObjectId, ref: 'customer'}],
  days:Number,
  out_date: Date,
  due_date: { type: Date, expires: '7d' },
  in_date: Date,
  fine: Number,
  booklist: [{type: Schema.Types.ObjectId, ref: 'books'}]
});

// Compile model from schema
var Transaction = mongoose.model('transaction', transSchema );

module.exports = Transaction
