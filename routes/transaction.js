onst express = require('express');
const transactionController = require('../controllers/transaction');

const router = express.Router();

router.get('/transactions', transactionController.selectAllTransactions );
router.get('/transactions/:id', transactionController.selectTransactionById);
router.post('/transactions', transactionController.insertTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);
router.put('/transactions/:id', transactionController.updateTransaction);

module.exports = router;
