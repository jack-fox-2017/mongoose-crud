var models = require('../models/book')

var getAllBooks = (req, res) => {
  models.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  models.create({
    isbn: req.body.isbn,
    tittle: req.body.tittle,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  insertData,
  getAllBooks
};
