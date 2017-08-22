const express = require('express');
const router = express.Router();
const controller = require ('../controllers/booksController')


router.get('/', controller.getBooks)
router.get('/:id', controller.getOneBook)
router.post('/', controller.addBook)
router.put('/:id', controller.updateBook)
router.delete('/:id', controller.deleteBook)

module.exports = router;
