/**
 * Created by xinbob on 4/11/17.
 *
 * 业务层 操作数据库
 */

var mongoose = require('mongoose');

// 1. 连接数据库
mongoose.connect('mongodb://localhost/itcast');

// 2. 设计你的模型架构
// 所谓的架构 为你的集合指定有哪些字段
// 字段是什么类型 字段的约束是什么?

// Mongoose 设计了对用户传入数据的约束
// 检查集合中必须要有什么字段之类的
var guestSchema = mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        // default: new Date() // 写new Date()的话只有创建schema的时候调用一次 不能这么写
        default: Date.now // 这样写的话 每次new Guest的时候 就会调用这个方法 获得当前时间
    }
});

// 3. 将架构发布为模型
// 参数1: 指定你的集合名 (一般集合名使用小写的复数形式)
// mongoose.model()传入一个大写字母开头的单词 mongoose创建集合的时候 转为小写
// 参数2: 给定一个架构 schema
var Guest = mongoose.model('Guest', guestSchema); // 接收返回值, 首字母大写 看起来类似构造函数

// 4. 直接通过Guest或者guest的实例操作数据库
// new Guest({
//     ip: '123'
// }).save(function (err, result) {
//     if (err) throw err;
//     console.log(result);
// })

module.exports = Guest;
