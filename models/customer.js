var mongoose = require('mongoose')
var schema = mongoose.Schema;

var customerSchema = new schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = {
  Customer
};
