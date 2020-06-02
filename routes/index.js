var express = require('express');
var router = express.Router();

router.use('/menu', require('./menuRoute'))
router.use('/order', require('./orderRoute'))
router.use('/table', require('./tableRoute'))
router.use('/waiter', require('./waiterRoute'))

module.exports = router;
