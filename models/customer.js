const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name: {type: String, default: 'Member Name'},
  memberid: {type: String, default: 'CL9999999'},
  address: {type: String, default: 'Pondok Indah Street'},
  zipcode: {type: Number, default: 1234},
  phone: {type: String, default: '081803'}
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
