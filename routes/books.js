var express = require('express')
var router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.read);
router.post('/', booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.destroy);

module.exports = router;
