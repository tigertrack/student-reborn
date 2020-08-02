var express = require('express');
var router = express.Router();

let subject = require('../controllers/subject');

/* GET home page. */
router.get('/', subject.index);

module.exports = router;