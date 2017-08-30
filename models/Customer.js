var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/library');

const customerSchema = new mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

const modelCustomer = mongoose.model('customers', customerSchema)

module.exports = modelCustomer
