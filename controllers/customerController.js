const Customer = require('../models/customer')

let addCustomer = (req, res) => {
  Customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, (err, customer) => {
    if(err) throw res.status(500).sen(err)
    res.json({msg: 'Adding customer success!'})
  })
}

let getAll = (req, res) => {
  Customer.find((err, customers) => {
    if(err) throw res.status(500).send(err)
    res.send(customers)
  })
}

let getCustomerById = (req, res) => {
  let id = req.params.id
  Customer.findOne({_id: id}, (err, customer) => {
    if(err) throw res.status(500).send(err)
    res.send(customer)
  })
}

let updateCustomer = (req, res) => {
  let id = req.params.id
  Customer.findOne({_id: id}, (err, customer) => {
    Customer.update({
      _id: customer._id
    }, {
      $set: {
        name: req.body.name || customer.name,
        memberid: req.body.memberid || customer.memberid,
        address: req.body.address || customer.address,
        zipcode: req.body.zipcode || customer.zipcode,
        phone: req.body.phone || customer.phone
      }
    }, (err, result) => {
      if(err) return res.status(500).send(err)
      res.send(result)
    })
  })
}

//=====using promise======
// let deleteCustomer = (req, res) => {
//   let id = req.params.id
//   Customer.remove({_id: id})
//   .then(() => {
//     res.send('Customer with deleted ')
//   })
// }

let deleteCustomer = (req, res) => {
  let id = req.params.id
  Customer.remove({_id: id}, (err, result) => {
    if(err) throw res.status(500).send(err)
    res.send(result)
  })
}

module.exports = {
  addCustomer,
  getAll,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
