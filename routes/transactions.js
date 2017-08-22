const express = require('express');
const router = express.Router();
const model = require('../controller/transaction')

router.get('/',model.getalltransaction)
router.post('/',model.inserttransaction)


module.exports = router;
