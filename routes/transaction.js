var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController');

/* GET users listing. */
router.get('/', transactionController.findAll);
router.post('/', transactionController.create);



module.exports = router;
