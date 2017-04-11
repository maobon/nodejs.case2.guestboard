/**
 * Created by xinbob on 4/11/17.
 * controller 控制器
 */

var Guest = require('../models/guest');

/**
 * 展示首页
 *
 * @param req
 * @param res
 */
exports.showIndex = function (req, res) {
    res.render('index', {
        title: ' 使用ejs模板引擎渲染'
    })
}

/**
 * 接收客户端提交的消息
 *
 * @param req
 * @param res
 */
exports.doSubmit = function (req, res) {

    // req.body body-parser插件将form表单提交的信息装入req中
    var message = req.body.message;
    // 可以从req中直接获取客户端的ip地址
    var ip = req.ip;

    // 直接new modle 就可以构造一个消息实例
    // 然后直接存入数据库中
    new Guest({
        ip: ip,
        message: message
    })
        .save()
        .then(function (result) {
            res.json({
                err_code: 0,
                result: result
            })
        })
        .catch(function (err) {
            res.json({
                err_code: 500,
                message: err.message
            })
        })

}


/**
 * 查询所有
 *
 * @param req
 * @param res
 */
exports.queryAll = function (req, res) {

    Guest
        .find()
        .sort('-time')
        .exec()
        .then(function (data) {
            res.json({
                err_code: 0,
                result: data
            })
        })
        .catch(function (err) {
            res.json({
                err_code: 500,
                message: err.message
            })
        })

}

