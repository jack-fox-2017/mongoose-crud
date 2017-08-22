const Transaction = require('../models/transaction')

let addTransaction = (req, res) => {
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist //add key-value booklist more than one
  }, (err, transaction) => {
    if(err) throw res.status(500).send(err)
    res.send({msg: 'Adding transaction success!'})
  })
}

let getAll = (req, res) => {
  Transaction.find({})
  .populate('memberid')
  .populate('booklist')
  .then(transactions => {
    res.json({transactions: transactions})
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let getTransactionById = (req, res) => {
  let id = req.params.id
  Transaction.findById(id)
  .then(transaction => {
    res.json({transaction: transaction})
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

//edit transaction tapi ga diperlukan, sama fungsinya spt di bawah
// let updateTransaction = (req, res) => {
//   let id = req.params.id
//   Transaction.findById({_id: id}, (err, transaction) => {
//     Transaction.update({
//       _id: transaction._id
//     }, {
//       $set:
//       {
//         memberid: req.body.memberid || transaction.memberid.memberid,
//         days: req.body.days || transaction.days,
//         out_date: req.body.out_date || transaction.out_date,
//         due_date: req.body.due_date || transaction.due_date,
//         in_date: req.body.in_date || transaction.in_date,
//         fine: req.body.fine || transaction.fine,
//         booklist: req.body.booklist || transaction.booklist
//       }
//     }, (err, result) => {
//       if(err) return res.send(err.message)
//       res.send(result)
//     })
//   })
// }


//edit transaction tapi ga diperlukan, sama fungsinya spt di atas
// let updateTransaction = (req, res) => {
//   let id = req.params.id
//   Transaction.findById({_id: id}, (err, transaction) => {
//     Transaction.update({_id: transaction._id}, {
//         memberid: req.body.memberid || transaction.memberid.memberid,
//         days: req.body.days || transaction.days,
//         out_date: req.body.out_date || transaction.out_date,
//         due_date: req.body.due_date || transaction.due_date,
//         in_date: req.body.in_date || transaction.in_date,
//         fine: req.body.fine || transaction.fine,
//         booklist: req.body.booklist || transaction.booklist
//     })
//     .then(transactions => {
//       res.send(transactions)
//     })
//     .catch(err => {
//       res.status(500).send(err)
//     })
//   })
// }

//seperti update, di transaksi ga diperlukan update
// let addBookToBooklist = (req, res) => {
//   let id = req.params.id
//   Transaction.update({_id: id}, {
//     $push: {
//       booklist: req.body.booklist
//     }
//   })
//   .then(bookToBooklist => {
//     res.send(bookToBooklist)
//   })
//   .catch(err => {
//     res.status(500).send(err)
//   })
// }


module.exports = {
  addTransaction,
  getAll,
  getTransactionById
  // updateTransaction,
  // addBookToBooklist
};
