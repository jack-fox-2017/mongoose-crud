const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers');


router.get('/', customersController.readAll);
router.get('/:id', customersController.readById);
router.post('/', customersController.create);
router.put('/:id', customersController.update);
router.delete('/:id', customersController.destroy);

module.exports = router;
