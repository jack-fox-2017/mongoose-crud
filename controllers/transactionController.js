const Transaction = require('../models/Transaction')
const dueDate = require('../helpers/dueDate')

module.exports = {
  findAll: (req, res) => {
    Transaction.find()
    .populate('memberId bookList')
    .then(docs => res.send(docs))
    .catch(err => res.send(err))
  },

  findOne: (req, res) => {
    Transaction.find({[req.params.key]: req.params.value})
    .populate('memberId bookList')
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  create: (req, res) => {
    req.body.out_date = new Date()
    req.body.due_date = dueDate(req.body.out_date, req.body.days)
    Transaction.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  update: (req, res) => {
    Transaction.update({[req.params.key]: req.params.value}, {in_date: new Date()})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}
