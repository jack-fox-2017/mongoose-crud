var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  member_id: String,
  address: String,
  zipcode: Number,
  phone: String
});

var customerModels = mongoose.model('Customer', customerSchema);

module.exports = customerModels
