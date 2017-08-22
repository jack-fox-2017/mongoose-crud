var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController');
/* GET users listing. */
// router.put('/:id', userController.update);
router.get('/', customerController.findAll);
router.get('/:id', customerController.findOne);
router.post('/', customerController.create);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

module.exports = router;
