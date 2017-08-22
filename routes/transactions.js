const express = require('express')
const router = express.Router();
const controller = require('../controllers/transactionController');

router.post('/', controller.addTransaction)
router.get('/', controller.getAll)
router.get('/:id', controller.getTransactionById)
// router.put('/:id', controller.updateTransaction) //ga diperlukan
// router.put('/:id', controller.addBookToBooklist)

module.exports = router;
