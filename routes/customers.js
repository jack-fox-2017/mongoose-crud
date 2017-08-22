var express = require('express')
var router = express.Router();
var controller = require('../controllers/customerController')

router.get('/', controller.getAllCustomer)
router.get('/:id', controller.getByIdCustomer)
router.put('/:id', controller.updateCustomer)
router.delete('/:id', controller.deleteCustomer)
router.post('/', controller.addCustomer)

module.exports = router
