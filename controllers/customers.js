'use strict'
const Customer = require('../models/customer');
const index = (req,res) => {
  res.send('sudah masuk Customers')
}

const readAll = (req,res) =>{
  Customer.find({})
  .then((documents)=>{
    res.send(documents)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const readById = (req,res) => {
  var id = { _id: req.params.id }
  Customer.find(id)
  .then((document)=>{
    res.send(document)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const create = (req,res) => {
  var add = {
    name: `${req.body.name}`,
    memberid: `${req.body.memberid}`,
    address: `${req.body.address}`,
    zipcode: `${req.body.zipcode}`,
    phone: `${req.body.phone}`
  }

  Customer.create(add)
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const update = (req,res) => {
  var update = {
    name: `${req.body.name}`,
    memberid: `${req.body.memberid}`,
    address: `${req.body.address}`,
    zipcode: `${req.body.zipcode}`,
    phone: `${req.body.phone}`
  }
  var id = { _id: req.params.id }

  Customer.updateOne(id,{$set: update})
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
}

const destroy = (req,res) => {
  var id = { _id: req.params.id}
  Customer.deleteOne(id)
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
}

module.exports={
  create,
  readAll,
  readById,
  update,
  destroy
}
