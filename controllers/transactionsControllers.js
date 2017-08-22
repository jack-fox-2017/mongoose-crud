var models = require('../models/transaction')

var getAllTransaction = (req, res) => {
  models.find({})
  .populate('memberid')
  .populate('booklist')
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  models.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAllTransaction,
  insertData
};
