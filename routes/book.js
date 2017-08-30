var express = require('express');
var router = express.Router();
var bookControl = require('../controllers/bookControllers')

/* GET users listing. */
router.get('/', bookControl.getAllBooks)
router.post('/', bookControl.insertData)
router.get('/:id', bookControl.getOneBook)
router.put('/:id', bookControl.updateBook)
router.delete('/:id', bookControl.deleteBook)
module.exports = router;
