const model = require('../models/library');

var selectAllCustomer = (req, res) => {
  model.customerModel.find({},(err, docs) => {
    if(!err){
      console.log(docs);
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var selectCustomerById = (req, res) => {
  model.customerModel.findById(req.params.id, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var insertNewCustomer = (req, res) => {
  model.customerModel.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },(err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var deleteCustomer = (req, res) => {
  model.customerModel.remove({
    _id: req.params.id
  },(err, docs) => {
    if(!err) {
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

var updateCustomer = (req, res) => {
  model.customerModel.findByIdAndUpdate(req.params.id, 
  {
    $set: {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
  }, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllCustomer,
  selectCustomerById,
  insertNewCustomer,
  deleteCustomer,
  updateCustomer
}
