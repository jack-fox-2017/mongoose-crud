var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/adminlibrary');

// create a schema
var customersSchema = new Schema({
  name: String,
  memberid:String,
  address: String,
  zipcode: Number,
  phone: Number
});

// the schema is useless so far
// we need to create a model using it
var customers = mongoose.model('customers', customersSchema);

// make this available to our users in our Node applications
module.exports = customers;
