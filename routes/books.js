var express = require('express');
var router = express.Router();
const bookController = require('../controllers/books');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.removeBook);

module.exports = router;
