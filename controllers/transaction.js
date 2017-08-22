const model = require('../models./library');

var selectAllTransactions = (req, res) => {
  model.transactionModel.find({})
  .populate('Book')
  .populate('Customer', (err, docs) => {
    if(!err) {
      console.log(docs);
      res.send(docs)
    }else{
      res.send(err)
    }
  })
}

var selectTransactionById = (req, res) => {
  model.transactionModel.findById( req.params.id, (err, docs) => {
    if(!err){
      console.log(docs);
      res.send(docs)
    }else{
      res.send(err)
    }
  })
}

var insertTransaction = (req, res) => {
  model.transactionModel.create({
    memberid: req.body.memberId
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  },(err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
}

var deleteTransaction = ( req, res ) => {
  model.transactionModel.remove({
    _id: req.params.id
  },(err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
}

var updateTransaction = (req, res ) => {
  model.transactionModel.findByIdAndUpdate(req.params.id, {
    memberid: req.body.memberId
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    {$push: {
      booklist: req.body.book_id
    }}
  })
}

module.exports = {
  selectAllTransactions,
  selectTransactionById,
  insertTransaction,
  deleteTransaction,
  updateTransaction
}
