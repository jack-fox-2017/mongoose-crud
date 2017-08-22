var transactions = require('../models/transaction')

function getAllTransaction (req,res){
  transactions.find({})
  .populate('booklist')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function getByIdTransaction (req,res){
  transactions.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addTransaction (req,res){
  transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(result => {
    console.log(result);
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteTransaction (req,res){
  transactions.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateTransaction (req,res){
  transactions.findOneAndUpdate({
    _id: req.params.id
  }, {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(result => {
    transactions.findOne({
      _id: req.params.id
    })
    // klo menggunakan findOneAndUpdate maka yg kt result pertama adalah findOne nya..
    // bkn hasil updatenya.. maka kt bikin findOne lg.. utk dptin response (hasil updatenya) 
    .then(response => {
      res.send(response)
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


 // butuh id transaction di url ( params), dan butuh ObjectId book di body (post)
function addBookToTransaction (req,res){
  transactions.findOneAndUpdate({
    _id: req.params.id
  }, {
    $push:{
      booklist:req.body.booklist
    }
  })
  .then(result => {
    res.send(result)
  })
  .catch(result => {
    res.status(500).send(err)
  })
}


module.exports = {
   getAllTransaction,
   getByIdTransaction,
   addTransaction,
   deleteTransaction,
   updateTransaction,
   addBookToTransaction
}
