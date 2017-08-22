const Transaction = require('../models/transaction');

var findAll = (req, res) => {
  Transaction.find({})
  .populate('booklist', 'title author')
  // .populate({path: 'memberid', select: 'name'})

  .then(result => res.send(result))
}

var create = (req, res) => {
  var data = {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date:new Date(),
    due_date: new Date(),
    in_date: new Date(),
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
