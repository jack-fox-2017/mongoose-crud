'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema
var TransactionSchema = Schema({
    memberid : { type: Schema.Types.ObjectId, ref: 'customers' },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
});

//create model
var Transaction = mongoose.model('transactions', TransactionSchema);

module.exports = Transaction;
