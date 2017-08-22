const Transaction = require('../models/transaction')

let addTransaction = (req, res) => {
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  }, (err, transaction) => {
    if(err) throw res.status(500).send(err)
    res.send({msg: 'Adding transaction success!'})
  })
}

module.exports = {
  addTransaction
};
