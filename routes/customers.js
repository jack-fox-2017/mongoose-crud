var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController')

/* GET users listing. */
router.get('/', customerController.findAll)
router.get('/:key/:value', customerController.findOne)
router.post('/', customerController.create)
router.put('/:key/:value', customerController.update)
router.delete('/:key/:value', customerController.destroy)

module.exports = router;
