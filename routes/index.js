/**
 * Created by xinbob on 4/11/17.
 *
 * 配置路由
 */

var express = require('express');

var guestController = require('../controllers/guest');

var router = express.Router();

// get() post() 方法的参数 callback 直接调controller中对应的方法
router
    .get('/', guestController.showIndex)
    .get('/query', guestController.queryAll)
    .post('/submit', guestController.doSubmit);


// 导出路由
module.exports = router;