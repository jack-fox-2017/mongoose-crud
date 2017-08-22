'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactionController')

/* GET users listing. */
router.get('/', controller.findTransactions);

router.post('/', controller.addTransaction);

router.get('/:id', controller.findOne);

router.delete('/:id', controller.deleteTransaction);

router.patch('/:id', controller.editTransaction);


module.exports = router;
