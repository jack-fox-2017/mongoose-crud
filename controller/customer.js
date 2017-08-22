const model = require('../model/customer');

var insertcustomer = (req,res) => {
  model.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getallcustomer = (req,res) => {
  model.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getonecustomer = (req,res) => {
  model.find({_id : req.params.id})
  .then(customer => {
    res.send(customer)
  })
  .catch(err => {
    res.send(err)
  })
}

var updatecustomer = (req,res) => {
  model.update({_id : req.params.id},{
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  .then(customer => {
    res.send(customer)
  })
  .catch(err => {
    res.send(err)
  })
}

var deletecustomer = (req,res) => {
  model.deleteOne({_id : req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {insertcustomer,
getallcustomer, getonecustomer, updatecustomer, deletecustomer};
