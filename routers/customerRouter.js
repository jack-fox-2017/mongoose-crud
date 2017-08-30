const express = require('express')
const router = express.Router()
const customerController = require("../controller/customerController")


router.get("/", customerController.getAll)
router.post("/", customerController.insert)
router.put("/:id", customerController.edit)
router.delete("/:id", customerController.remove)


module.exports = router
