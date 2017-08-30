var mongoose = require('mongoose')
var schema = mongoose.Schema;

var bikeSchema = new schema({
  name: String,
  price: String,
  image: String,
  category: String,
  stock: Number
});

var Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
