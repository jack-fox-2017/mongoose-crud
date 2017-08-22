const express = require('express')
const router = express.Router()

const controller = require('../controller/transactions')

router.get('/', controller.getAllData)
// router.post('/', controller.insertData)
// router.get('/:id', controller.findId)
// router.put('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

module.exports = router
