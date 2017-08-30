var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController');
/* GET users listing. */
// router.put('/:id', userController.update);
router.get('/', bookController.findAll);
router.get('/:id', bookController.findOne);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;
