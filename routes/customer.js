const express = require('express');
const customerController = require('../controllers/customer');

const router = express.Router();

router.get('/customers', customerController.selectAllCustomer);
router.get('/customers/:id', customerController.selectCustomerById);
router.post('/customers', customerController.insertNewCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
