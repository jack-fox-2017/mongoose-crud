var express = require('express');
var router = express.Router();
var controllers = require('../controller/customerControllers')

router.post('/', controllers.createCustomer)
router.get('/', controllers.readCustomer)
router.put('/:id', controllers.updatingCustomer)
router.delete('/:id', controllers.deleteCustomer)


module.exports = router
