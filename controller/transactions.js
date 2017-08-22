const modelTransaction = require('../model/transaction')

var getAllData = (req, res)=>{
  Transaction.find()
  .then((data)=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteData = (req, res)=>{
  modelTransaction.findByIdAndRemove({_id:req.params.id})
  .then(()=>{
    res.send("Delete success")
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getAllData, deleteData
}
