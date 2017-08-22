const express = require('express')
const router = express.Router()
const controller = require('../controllers/customerController')

router.post('/', controller.addCustomer)
router.get('/', controller.getAll)
router.get('/:id', controller.getCustomerById)
router.put('/:id', controller.updateCustomer)
router.delete('/:id', controller.deleteCustomer)

module.exports = router;
