const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
},{
  versionKey: false
})

var customerSchema = new Schema({
  name: String,
  memberId:String,
  address: String,
  zipcode: String,
  phone: String 
},{
  versionKey: false
})

var transactionSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }] 
}, {
  versionKey: false
})

var bookModel = mongoose.model('Book', bookSchema);
var customerModel = mongoose.model('Customer', customerSchema);
var transactionModel = mongoose.model('Transaction', transactionSchema);


module.exports = {
  bookModel,
  customerModel,
  transactionModel
}
