'use strict'

var mongoose = require('mongoose');

var CustomerSchema = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
});

//create model
var Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;
