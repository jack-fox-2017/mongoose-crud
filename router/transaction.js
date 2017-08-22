const express = require('express')
const router = express.Router()

const controller = require('../controller/transactions')

router.get('/', controller.getAllData)
router.post('/', controller.insertData)

module.exports = router
