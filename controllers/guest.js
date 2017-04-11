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
        title: 'Hello EJS'
    })
}

/**
 * 接收客户端提交的消息
 *
 * @param req
 * @param res
 */
exports.doSubmit = function (req, res) {

    var message = req.body.message;
    var ip = req.ip;

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

