const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

router.get('/books', bookController.selectAllBooks);
router.get('/books/:id', bookController.selectBookById);
router.post('/books', bookController.insertNewBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);



module.exports = router;
