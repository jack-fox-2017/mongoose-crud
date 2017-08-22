var express = require('express');
var router = express.Router();
var transactionControl = require('../controllers/transactionsControllers')

/* GET users listing. */
router.get('/', transactionControl.getAllTransaction)
router.post('/', transactionControl.insertData)
// router.get('/:id', transactionControl.getOneBook)
// // router.post('/:id', transactionControl.updateBook)
// router.put('/:id', transactionControl.updateBook)
// router.delete('/:id', transactionControl.deleteBook)
module.exports = router;
