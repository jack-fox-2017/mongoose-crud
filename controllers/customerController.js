'use strict'

const Customer = require('../models/customers')
// var mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
module.exports = {
  create: function (req,res) {
    Customer.create({
      name : req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findAll: function (req,res) {
    Customer.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findOne: function (req,res) {
    Customer.findById({_id: ObjectId(`${req.params.id}`)})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  delete: function (req,res) {
    Customer.deleteOne({_id: ObjectId(`${req.params.id}`)})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  update: function (req,res) {
    Customer.updateOne({_id: ObjectId(`${req.params.id}`)},
        { $set:
          {
          name : req.body.name,
          memberid: req.body.memberid,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
          }
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
}
