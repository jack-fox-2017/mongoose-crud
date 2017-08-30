const express = require('express');
const router = express.Router();
const controller = require ('../controllers/transactionsController')


router.get('/', controller.getTransactions)
router.get('/:id', controller.getOneTransaction)
router.post('/', controller.addTransaction)

module.exports = router;
