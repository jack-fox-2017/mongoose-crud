const model = require('../model/customer');

var insertcustomer = (req,res) => {
  model.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getallcustomer = (req,res) => {
  model.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}



// var getonebook = (req,res) => {
//   model.find({username :})
// }

module.exports = {insertcustomer,
getallcustomer};
