const express = require('express')
const router = express.Router()
const bookController = require("../controller/bookController")


router.get("/", bookController.getAll)
router.post("/", bookController.insert)
router.put("/:id", bookController.edit)
router.delete("/:id", bookController.remove)


module.exports = router
