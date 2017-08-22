const express = require('express');
const router = express.Router();
const model = require('../controller/customer')

router.get("/", model.getallcustomer)
router.post("/", model.insertcustomer)

module.exports = router;
