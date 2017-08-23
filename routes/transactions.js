var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController')

/* GET users listing. */
router.get('/', transactionController.findAll)
router.get('/:key/:value', transactionController.findOne)
router.post('/', transactionController.create)
router.put('/:key/:value', transactionController.update)

module.exports = router;
