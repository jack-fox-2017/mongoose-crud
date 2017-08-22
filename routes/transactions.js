var express = require('express');
var router = express.Router();
const transController = require('../controllers/transactions');

router.get('/', transController.getTransactions);
router.get('/:id', transController.getTransaction);
router.post('/', transController.createTransaction);

module.exports = router;
