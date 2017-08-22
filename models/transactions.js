'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/library');

var transactionSchema = mongoose.Schema({
    customerid: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    bookid: [{
        type: Schema.Types.ObjectId,
        ref: 'Books'
    }]
})

var transactionModel = mongoose.model('transactions', transactionSchema);


module.exports = {
    transactionModel
}