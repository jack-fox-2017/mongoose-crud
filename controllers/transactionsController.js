const model = require('../models/Transaction')

const getTransactions = (req,res) => {
  model.find().populate('memberid').populate('booklist')
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const getOneTransaction = (req,res) => {
  model.findOne({_id : req.params.id}).populate('memberid').populate('booklist')
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const addTransaction = (req,res) => {
  model.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(() => (
    res.send('data transaksi berhasil ditambahkan')
  ))
  .catch(err => res.send(err))
}

// const updateCustomer = (req,res) => {
//   model.findOneAndUpdate({
//     _id : req.params.id
//   }, {
//     name: req.body.name,
//     memberid: req.body.memberid,
//     address: req.body.address,
//     zipcode: req.body.zipcode,
//     phone: req.body.phone
//   })
//   .then(() => (
//     res.send('berhasil diupdate')
//   ))
//   .catch(err => res.send(err))
// }
//
// const deleteCustomer = (req,res) => {
//   model.deleteOne({_id : req.params.id})
//   .then(() => (
//     res.send('berhasil dihapus satu data')
//   ))
//   .catch(err => res.send(err))
// }

module.exports = {
  getTransactions,
  getOneTransaction,
  addTransaction
}


// const getTransactions = (req,res) => {
//   model.find().populate('memberid').populate('booklist')
//   .then(data=> {
//     let arr = []
//     data[0].booklist.forEach(b=> {
//       arr.push(b._id)
//     })
//     res.send({
//       _id: data[0]._id,
//       memberid: data[0].memberid.memberid,
//       days: data[0].days,
//       out_date: data[0].out_date,
//       due_date: data[0].due_date,
//       in_date: data[0].in_date,
//       fine: data[0].fine,
//       booklist: arr
//     })
//   }
// )
//   .catch(err => res.send(err))
// }
