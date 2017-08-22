var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var custSchema = new Schema({
  name:String,
  memberid:String,
  address:String,
  zipcode:String,
  phone:String
});

var customer = mongoose.model('customer', custSchema);

module.exports = customer;
