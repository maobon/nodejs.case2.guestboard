/**
 * Created by xinbob on 4/11/17.
 */

var express = require('express');

var guestController = require('../controllers/guest');

var router = express.Router();

router
    .get('/', guestController.showIndex)
    .get('/query', guestController.queryAll)
    .post('/submit', guestController.doSubmit);

module.exports = router;