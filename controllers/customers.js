const custModel = require('../models/customer');

var getCustomers = (req, res)=>{
  custModel.find((err, customers)=>{
    if(err) res.send(err);
    else res.json(customers);
  })
}

var getCustomer = (req, res)=>{
  custModel.findById(req.params.id,(err, customer)=>{
    if(err) res.send(err);
    else res.json(customer);
  });
}

var createCustomer = (req, res)=>{
  custModel.create(req.body, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

var updateCustomer = (req, res)=>{
  custModel.findByIdAndUpdate(req.params.id, req.body, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

var removeCustomer = (req, res)=>{
  custModel.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  removeCustomer
}
