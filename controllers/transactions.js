'use strict'
const Transaction = require('../models/transaction');


exports.create = (req,res) => {
  var set_due_date = new Date();
  set_due_date.setDate(set_due_date.getDate() + req.body.days);
  var set_in_date = new Date();
  set_in_date.setDate(set_in_date.getDate() + (req.body.days+2));

  var add = {
    memberid: `${req.body.memberid}`,
    days: Number(req.body.days),
    out_date: new Date().toISOString(),
    due_date: set_due_date.toISOString(),
    in_date: set_in_date.toISOString(),
    fine: Number(req.body.fine),
    booklist: req.body.booklist
  }

  Transaction.create(add)
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.readAll = (req,res) =>{
  Transaction.find({})
  .populate('memberid','name')
  .populate('booklist')
  .then((documents)=>{
    res.send(documents)
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.readById = (req,res) => {
  var id = { _id: req.params.id }
  Transaction.find(id)
  .populate('memberid','memberid ')
  .populate('booklist')
  .then((document)=>{
    res.send(document)
  })
  .catch((err)=>{
    res.send(err)
  })
}

// module.exports={
//   create,
//   readAll
// }
