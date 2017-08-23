const Customer = require('../models/customer');

var findAll = (req, res) => {
  Customer.find({})
  .then(result => res.send(result))
}

var create = (req, res) => {
  var data = {
    name: req.body.name,
    memberid: req.body.memberid,
    address:req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }
  Customer.create(data)
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var findOne = (req, res) => {
  Customer.findById({_id: req.params.id})
  .then(data=>  res.send(data))
  .catch(err => res.send(err))
}

var putOne = (req, res) => {
  Customer.findById({_id: req.params.id})
  .then(data=> {
    var data = {
      name: req.body.name || data.name,
      memberid: req.body.memberid || data.memberid,
      address:req.body.address || data.address,
      zipcode: req.body.zipcode || data.zipcode,
      phone: req.body.phone || data.phone
    }
    Customer.update({_id: req.params.id},{ $set: data})
    .then(() => res.send('data updated'))
    .catch(err => res.send(err))
  })
  .catch(err => res.send(err))
}

var remove = (req, res) => {
  Customer.remove({_id: req.params.id})
  .then(()=> res.send('data deleted'))
  .catch(err => res.send(err))
}


module.exports = {
  findAll, create, findOne, putOne, remove
}
