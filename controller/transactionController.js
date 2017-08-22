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

const remove = (req, res)=>{
  modelTransaction.remove({_id: ObjectId(req.params.id)})
  .then(()=>{
    res.send("Berhasil menghapus")
  }).catch(err=>{
    res.send("Gagal menghapus")
  })
}

const edit = (req, res)=>{
  modelTransaction.update({_id: ObjectId(req.params.id)},{
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : req.body.out_date,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  })
  .then(()=>{
    res.send("Berhasil edit")
  })
  .catch(err=>{
    res.send("Gagal edit")
  })
}
module.exports = {
  getAll,
  insert,
  remove,
  edit
}
