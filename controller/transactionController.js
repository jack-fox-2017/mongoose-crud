var modelTransaction = require('../model/transactionModels')

var createTransaction = function(req, res){
  modelTransaction.create({
    member_id: req.body.member_id,
    days: req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    bookList: req.body.bookList,
  })
  .then(()=>{
    res.send('data created')
  })
  .catch(err=>{
    res.send(err)
  })
}

// var editTransaction = function(req, res){
//   modelTransaction.findById({
//     _id:req.params.id
//   })
//   .populate('member_id bookList')
//   .then(data=>{
//     res.send(data)
//   })
// }

var readTransaction = function(req, res){
  modelTransaction.find()
  // .populate('member_id')
  .populate({path:'bookList', select:'title author'})
  // .populate('member_id bookList')
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

// var deleteTransaction = function(req, res){
//   modelTransaction.findByIdAndRemove({
//     _id:req.params.id
//   })
//   .then(()=>{
//     res.send('deleted')
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// }

module.exports = {
  createTransaction,
  readTransaction
}
