const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))
const customerController = require('../controllers/customer')

router.get('/', customerController.getAll)
router.post('/', customerController.insertData)
router.delete('/:id', customerController.deleteData)
router.put('/:id', customerController.editData)

module.exports = router
