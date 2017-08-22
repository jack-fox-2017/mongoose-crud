var express = require('express');
var router = express.Router();
var transactionController = require('../controllers/transactionController');
/* GET users listing. */
// router.put('/:id', userController.update);
router.get('/', transactionController.findAll);
router.get('/:id', transactionController.findOne);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;
