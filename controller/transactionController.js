const ObjectId = require("mongodb").ObjectId
const modelTransaction = require("../models/transaction")

const getAll = (req, res)=>{
 modelTransaction.find()
 .populate("memberid").populate({path:"booklist", select:"author title"})
 .then(rows=>{
   res.send(rows)
 })
 .catch(err=>{
   res.send(err)
 })
}

const insert = (req, res)=>{
  modelTransaction.create({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date : new Date(),
    fine : req.body.fine,
    booklist : req.body.booklist
  }).then(()=>{
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    res.send("Gagal menambahkan")
  })
}
module.exports = {
  getAll,
  insert
}
