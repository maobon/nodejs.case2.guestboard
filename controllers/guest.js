/**
 * Created by xinbob on 4/11/17.
 */

var Guest = require('../models/guest');

exports.showIndex = function (req, res) {
    res.render('index', {
        title: 'Hello EJS'
    })
}

