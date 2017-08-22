var express = require('express')
var router = express.Router();
var controller = require('../controllers/transactionController')

router.get('/', controller.getAllTransaction)
router.get('/:id', controller.getByIdTransaction)
router.put('/:id', controller.updateTransaction)
router.delete('/:id', controller.deleteTransaction)
router.post('/', controller.addTransaction)
router.post('/:id', controller.addBookToTransaction)

module.exports = router
