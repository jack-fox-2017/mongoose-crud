const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database conected");
  }
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const customerRouter = require("./routers/customerRouter")
const bookRouter = require("./routers/bookRouter")

app.use('/book', bookRouter)
app.use('/customer', customerRouter)



app.listen(3000)
