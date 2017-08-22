var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  member_id:[{
    type:Schema.Types.ObjectId,
    ref:'Customer'
  }],
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  bookList:[{
    type:Schema.Types.ObjectId,
    ref:'Book'
  }]
});

var transactionModels = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModels
