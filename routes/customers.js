const express = require('express');
const router = express.Router();
const model = require('../controller/customer')

router.get("/", model.getallcustomer)
router.post("/", model.insertcustomer)
router.get("/:id", model.getonecustomer)
router.put("/:id", model.updatecustomer)
router.delete("/:id", model.deletecustomer)

module.exports = router;
