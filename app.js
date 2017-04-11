/**
 * Created by xinbob on 4/11/17.
 *
 * 入口点
 */

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var router = require('./routes')


var app = express();

// 配置EJS模板引擎
app.set('view engine', 'ejs');
app.set('views', config.viewPath);


app.use(bodyParser.urlencoded({extended: false}))

app.use(router);

app.listen(3000, function () {
    console.log('server is running...');
});