var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address : String,
  zipcodes: String,
  phone: String
});

// Compile model from schema
var Customer = mongoose.model('customer', customerSchema );

module.exports = Customer
