var models = require('../models/customer')

var getAllCustomer = (req, res) => {
  models.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOneCustomer = (req, res) => {
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
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateCustomer = (req, res) => {
  models.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteCustomer = (req, res) => {
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
  getAllCustomer,
  insertData,
  getOneCustomer,
  deleteCustomer,
  updateCustomer
};
