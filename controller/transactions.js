const modelTransaction = require('../model/transaction')

var getAllData = (req, res)=>{
  modelTransaction.find()
  .populate({path:'memberid', select:"memberid"})
  .populate({path:"booklist", select:"_id"})
  .then((data)=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var insertData = (req, res)=>{
  modelTransaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date : new Date(),
    fine: req.body.fine,
    booklist: req.body.booklist
  })
  .then(()=>{
    res.send("Transaction create")
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  getAllData, insertData
}
