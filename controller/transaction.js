const model = require('../model/transaction');
//delete dan update tidak ada karena transaction ga mungkin di //delete sama update

var inserttransaction = (req,res) => {
  model.create({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : req.body.out_date,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getalltransaction = (req,res) => {
  model.find({})
  .populate("memberid")
  .populate("booklist")
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

// var getonebook = (req,res) => {
//   model.find({username :})
// }

module.exports = {inserttransaction,
getalltransaction};
