const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Database connected');
})




app.get('/', (req, res) => {
  res.send('welcome bro..')
})

const bookRouter = require('./routes/book')
const customerRouter = require('./routes/customer')
const transactionRouter = require('./routes/transaction')

app.use('/books', bookRouter)
app.use('/customers', customerRouter)
app.use('/transactions', transactionRouter)





app.listen(3000)
