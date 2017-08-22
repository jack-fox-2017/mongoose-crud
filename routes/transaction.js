const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions');

router.get('/', transactionsController.readAll);
router.get('/:id', transactionsController.readById);
router.post('/', transactionsController.create);

module.exports = router;
