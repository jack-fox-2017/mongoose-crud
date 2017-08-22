const express = require('express')
const router = express.Router()
const transactionController = require("../controller/transactionController")


router.get("/", transactionController.getAll)
router.post("/", transactionController.insert)
router.put("/:id", transactionController.edit)
router.delete("/:id", transactionController.remove)


module.exports = router
