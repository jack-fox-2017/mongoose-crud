var express = require('express');
var router = express.Router();
var bikeControl = require('../controllers/bikeControllers')

/* GET users listing. */
router.get('/', bikeControl.getAllBike)
router.post('/', bikeControl.insertData)
router.get('/:id', bikeControl.getOneBike)
router.put('/:id', bikeControl.updateBike)
router.delete('/:id', bikeControl.deleteBike)

module.exports = router;
