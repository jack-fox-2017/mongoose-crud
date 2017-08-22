const transactionModel = require('../models/transaction')
const ObjectId = require('mongodb').ObjectId

var getAll = (req, res) => {
  transactionModel.find()
  .populate('memberid')
  .populate('booklist')
  .then(dataTransactions => {
    res.send(dataTransactions)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  transactionModel.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(() => {
    res.send('data added')
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAll,
  insertData
}
