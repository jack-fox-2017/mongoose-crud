const Customer = require('../models/Customer')

module.exports = {
  findAll: (req, res) => {
    Customer.find()
    .then(docs => res.send(docs))
    .catch(err => res.send(err))
  },

  findOne: (req, res) => {
    Customer.find({[req.params.key]: req.params.value})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  create: (req, res) => {
    Customer.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  update: (req, res) => {
    Customer.update({[req.params.key]: req.params.value}, req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  destroy: (req, res) => {
    Customer.deleteOne({[req.params.key]: req.params.value})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}
