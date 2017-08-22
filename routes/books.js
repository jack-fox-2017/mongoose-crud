'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController')

/* GET users listing. */
router.get('/', controller.findBooks);

router.post('/', controller.addBook);

router.get('/:id', controller.findOne);

router.delete('/:id', controller.deleteBook);

router.patch('/:id', controller.editBook);


module.exports = router;
