const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

const Customer = mongoose.model('customers', customerSchema)

module.exports = Customer
