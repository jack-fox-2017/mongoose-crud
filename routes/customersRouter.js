const express = require('express');
const router = express.Router();
const controller = require ('../controllers/customersController')


router.get('/', controller.getCustomers)
router.get('/:id', controller.getOneCustomer)
router.post('/', controller.addCustomer)
router.put('/:id', controller.updateCustomer)
router.delete('/:id', controller.deleteCustomer)

module.exports = router;
