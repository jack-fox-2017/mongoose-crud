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

app.use('/books', bookRouter)





app.listen(3000)
