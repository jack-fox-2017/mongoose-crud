const modelCustomer = require('../model/customer')

var getAllData = (req, res)=>{
  modelCustomer.find()
  .then((customers)=>{
    res.send(customers)
  })
  .catch(err=>{
    res.send(err)
  })
}

var insertData = (req, res)=>{
  modelCustomer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address : req.body.address,
    zipcodes: req.body.zipcodes,
    phone: req.body.phone
  })
  .then(()=>{
    res.send("Succes Add Customers")
  })
  .catch(err=>{
    res.send(err)
  })
}

var findId = (req, res)=>{
  modelCustomer.findById({_id:req.params.id})
  .then((customer)=>{
    res.send(customer)
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateData = (req, res)=>{
  modelCustomer.findById(req.params.id)
  .then((customer)=>{
    customer.name = req.body.name || customer.name
    customer.memberid = req.body.memberid || customer.memberid
    customer.address  = req.body.address || customer.address
    customer.zipcodes = req.body.zipcodes || customer.zipcodes
    customer.phone = req.body.phone || customer.phone

    customer.save((err, data)=>{
      if(err){
        res.status(500).send(err)
      }
      res.send(data)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteData = (req, res)=>{
  modelCustomer.findByIdAndRemove({_id:req.params.id})
  .then(()=>{
    res.send("Success deleted")
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getAllData, insertData, findId, updateData, deleteData
}
