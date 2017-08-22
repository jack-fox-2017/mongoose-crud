var express = require('express');
var router = express.Router();
var controllers = require('../controller/transactionController')


router.post('/', controllers.createTransaction)
router.get('/', controllers.readTransaction)
// router.delete('/:id', controllers.deleteTransaction)

module.exports = router
