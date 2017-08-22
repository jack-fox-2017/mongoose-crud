const express = require('express')
const router = express.Router()
const transactionController = require("../controller/transactionController")


router.get("/", transactionController.getAll)
router.post("/", transactionController.insert)


module.exports = router
