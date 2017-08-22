var express = require('express');
var router = express.Router();
var customerControl = require('../controllers/customersControllers')

/* GET users listing. */
router.get('/', customerControl.getAllCustomer)
router.post('/', customerControl.insertData)
router.get('/:id', customerControl.getOneCustomer)
router.put('/:id', customerControl.updateCustomer)
// router.put('/:id', customerControl.updateBook)
router.delete('/:id', customerControl.deleteCustomer)
module.exports = router;
