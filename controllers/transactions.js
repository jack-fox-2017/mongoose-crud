const transModel = require('../models/transaction');

var getTransactions = (req, res)=>{
  transModel.find()
  .populate('customerId booklist')
  .exec((err, transactions)=>{
    if(err) res.send(err);
    else res.json(transactions);
  })
}

var getTransaction = (req, res)=>{
  transModel.findById(req.params.id)
  .populate('customerId booklist')
  .exec((err, transaction)=>{
    if(err) res.send(err);
    else res.json(transaction);
  })
}

var createTransaction = (req, res)=>{
  transModel.create({
    customerId:req.body.customerId,
    days:req.body.days,
    out_date: new Date(req.body.out_date).toISOString(),
    due_date: new Date(req.body.due_date).toISOString(),
    in_date: new Date(req.body.in_date).toISOString(),
    fine: req.body.fine,
    booklist:req.body.booklist.split(',')
  }, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction
}
