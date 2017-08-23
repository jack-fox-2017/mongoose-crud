var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: Number
})

const customer = mongoose.model('customer',customerSchema)

module.exports = customer;
