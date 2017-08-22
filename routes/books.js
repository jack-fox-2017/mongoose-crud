var express = require('express');
var router = express.Router();
var controllers = require('../controller/bookControllers')


router.post('/', controllers.createBook)
router.get('/', controllers.readBook)
router.put('/:id', controllers.updateBook)
router.delete('/:id', controllers.deleteBook)

module.exports = router
