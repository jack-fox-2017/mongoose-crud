const mongoose = require('mongoose')

let customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  zipcode: String,
  phone: String
})

module.exports = mongoose.model('Customer', customerSchema)
