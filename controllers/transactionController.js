const Transaction = require('../models/transaction');

var findAll = (req, res) => {
  Transaction.find({})
  .populate('name')
  .populate('booklist')
  .then(result => res.send(result))
}

var create = (req, res) => {
  var data = {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date:req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  }
  Transaction.create(data)
  .then(result => res.send(result))
  .catch(err => res.send(err))
}



module.exports = {
  findAll, create
}
