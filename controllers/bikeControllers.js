var models = require('../models/bike')

var getAllBike = (req, res) => {
  models.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOneBike = (req, res) => {
  models.find({
    _id: req.params.id
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  models.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateBike = (req, res) => {
  models.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteBike = (req, res) => {
  models.deleteOne({
    _id: req.params.id
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  insertData,
  getAllBike,
  getOneBike,
  updateBike,
  deleteBike
};
