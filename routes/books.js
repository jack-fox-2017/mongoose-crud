var express = require('express')
var router = express.Router();
var controller = require('../controllers/bookController')

router.get('/', controller.findAllBook)
router.get('/:id', controller.findByIdBook)
router.put('/:id', controller.updateByIdBook)
router.delete('/:id', controller.deleteByIdBook)
router.post('/', controller.addBook)

module.exports = router
