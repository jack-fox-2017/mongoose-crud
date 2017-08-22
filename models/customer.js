const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = Schema({
  name:  String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

const modelCustomers = mongoose.model('customers', customersSchema);

module.exports = modelCustomers
