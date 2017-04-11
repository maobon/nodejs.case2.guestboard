/**
 * Created by xinbob on 4/11/17.
 *
 * 入口点
 */

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var router = require('./routes');

// 使用express框架 编写nodeJS后端
var app = express();

// 开放公共资源
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

// 配置EJS模板引擎
app.set('view engine', 'ejs');
app.set('views', config.viewPath);

// express框架 中间件 方便处理常规表单post提交时提交的数据
// 表单提交 可以通过 req.body 来获取表单请求体数据
app.use(bodyParser.urlencoded({extended: false}))

// 挂载路由容器
app.use(router);

app.listen(3000, function () {
    console.log('server is running...');
});