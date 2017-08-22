const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))
const bookController = require('../controllers/book')

router.get('/', bookController.getAll)
router.post('/', bookController.insertData)
router.delete('/:id', bookController.deleteData)
router.put('/:id', bookController.editData)

module.exports = router
