'use strict'

const customers = require('../models/customers');

exports.findcustomers = (req, res) => {
  customers.customerModel.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

exports.findOne = (req, res) => {
  customers.customerModel.findOne({
      _id: req.params.id
    })
    .then(data => {
      res.send(data)
    })
}

exports.addcustomer = (req, res) => {
  customers.customerModel.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    .then(data => {
      res.send(data)
    })
}

exports.editcustomer = (req, res) => {
  customers.customerModel.updateOne({
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
}

exports.deletecustomer = (req, res) => {
  customers.customerModel.deleteOne({
      _id: req.params.id
    })
    .then(data => {
      res.send(data)
    })
}