const ObjectId = require("mongodb").ObjectId
const modelBook = require("../models/book")

const getAll = (req, res)=>{
 modelBook.find()
 .then(rows=>{
   res.send(rows)
 })
 .catch(err=>{
   res.send(err)
 })
}

const insert = (req, res)=>{
  modelBook.create({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  }).then(()=>{
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    res.send("Gagal menambahkan")
  })
}

const remove = (req, res)=>{
  modelBook.remove({_id: ObjectId(req.params.id)})
  .then(()=>{
    res.send("Berhasil menghapus")
  }).catch(err=>{
    res.send("Gagal menghapus")
  })
}

const edit = (req, res)=>{
  modelBook.update({_id: ObjectId(req.params.id)},{
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
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
