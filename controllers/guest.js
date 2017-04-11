/**
 * Created by xinbob on 4/11/17.
 */

exports.showIndex = function (req, res) {
    res.render('index', {
        title: 'Hello EJS'
    })
}