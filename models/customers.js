'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library');

var customerSchema = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: Number,
    phone: Number
})

var customerModel = mongoose.model('customers', customerSchema);


module.exports = {
    customerModel
}