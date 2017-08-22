const customerModel = require('../models/customer')
const ObjectId = require('mongodb').ObjectId

var getAll = (req, res) => {
  customerModel.find()
  .then(dataCustomers => {
    res.send(dataCustomers)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  customerModel.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(() => {
    res.send('data added')
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteData = (req, res) => {
  customerModel.remove({
    _id: ObjectId(req.params.id)
  })
  .then(() => {
    res.send('data removed')
  })
  .catch(err => {
    res.send(err)
  })
}

var editData = (req, res) => {
  customerModel.update({
    _id: ObjectId(req.params.id)
  },
  {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(() => {
    res.send('data updated')
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAll,
  insertData,
  deleteData,
  editData
}
