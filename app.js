const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongo "mongodb://cluster0-shard-00-00-rcykk.mongodb.net:27017,cluster0-shard-00-01-rcykk.mongodb.net:27017,cluster0-shard-00-02-rcykk.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username gananggww --password qwerty1234', (err)=>{
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
const transactionRouter = require("./routers/transactionRouter")


app.use('/book', bookRouter)
app.use('/customer', customerRouter)
app.use('/transaction', transactionRouter)




app.listen(3000)
