'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/costumerController')

/* GET users listing. */
router.get('/', controller.findcustomers);

router.post('/', controller.addcustomer)

router.patch('/:id', controller.editcustomer)

router.get('/:id', controller.findOne);

router.delete('/:id', controller.deletecustomer)



module.exports = router;
