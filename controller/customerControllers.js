var modelCustomer = require('../model/customerModels')

var createCustomer = function(req, res){
  modelCustomer.create({
    name: req.body.name,
    member_id: req.body.member_id,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone,
  })
  .then(()=>{
    res.send('created')
  })
  .catch(err=>{
    res.send(err)
  })
}

var readCustomer = function(req, res){
  modelCustomer.find()
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var updatingCustomer = function(req, res){
  modelCustomer.findByIdAndUpdate({
    _id:req.params.id
  },{
    name: req.body.name,
    member_id: req.body.member_id,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone,
  })
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteCustomer = function(req, res){
  modelCustomer.findByIdAndRemove({
    _id:req.params.id
  })
  .then(()=>{
    res.send('data deleted')
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  createCustomer,
  readCustomer,
  updatingCustomer,
  deleteCustomer
}
