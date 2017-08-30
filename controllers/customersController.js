const model = require('../models/Customer')

const getCustomers = (req,res) => {
  model.find()
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const getOneCustomer = (req,res) => {
  model.findOne({_id : req.params.id})
  .then(data=> res.send(data))
  .catch(err => res.send(err))
}

const addCustomer = (req,res) => {
  model.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(() => (
    res.send('data customer berhasil ditambahkan')
  ))
  .catch(err => res.send(err))
}

const updateCustomer = (req,res) => {
  model.findOneAndUpdate({
    _id : req.params.id
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(() => (
    res.send('berhasil diupdate')
  ))
  .catch(err => res.send(err))
}

const deleteCustomer = (req,res) => {
  model.deleteOne({_id : req.params.id})
  .then(() => (
    res.send('berhasil dihapus satu data')
  ))
  .catch(err => res.send(err))
}

module.exports = {
  getCustomers,
  getOneCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer
}
