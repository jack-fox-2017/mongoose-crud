var express = require('express');
var router = express.Router();
const custController = require('../controllers/customers');

router.get('/', custController.getCustomers);
router.get('/:id', custController.getCustomer);
router.post('/', custController.createCustomer);
router.put('/:id', custController.updateCustomer);
router.patch('/:id', custController.updateCustomer);
router.delete('/:id', custController.removeCustomer);

module.exports = router;
