var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController');

/* GET users listing. */
router.get('/', customerController.findAll);
router.post('/', customerController.create);
router.get('/:id', customerController.findOne);
router.put('/:id', customerController.putOne);
router.delete('/:id', customerController.remove);


module.exports = router;
