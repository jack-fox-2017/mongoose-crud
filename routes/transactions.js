var express = require('express');
var router = express.Router();
const transController = require('../controllers/transactions');

router.get('/', transController.getTransactions);
router.get('/:id', transController.getTransaction);
router.post('/', transController.createTransaction);
router.put('/:id', transController.updateTransaction);
router.patch('/:id', transController.updateTransaction);
router.delete('/:id', transController.removeTransaction);

module.exports = router;
