const express = require('express');
const router = express.Router();
const model = require('../controller/book')

router.get('/',model.getallbook)
router.post('/',model.insertbook)
router.get('/:id',model.getonebook)
router.put('/:id',model.updatebook)
router.delete('/:id',model.deletebook)

module.exports = router;
