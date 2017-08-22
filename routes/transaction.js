const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))
const transactionController = require('../controllers/transaction')

router.get('/', transactionController.getAll)
router.post('/', transactionController.insertData)
// router.delete('/:id', transactionController.deleteData)
// router.put('/:id', transactionController.editData)

module.exports = router
