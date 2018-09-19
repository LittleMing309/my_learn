var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "userId": String,
    "userName": String,
    "userPwd": String,
    "orderList": Array,
    "cartList": [
        {
            "productId":String,
            "productName":String,
            "salePrice":String,
            "productImage":String,
            "checked":String,
            "productNum":String
        }
    ],
    "addressList": Array
});

module.exports = mongoose.model("User",userSchema);
// module.exports = mongoose.model('User',userSchema,'users');     // 第三个参数是管理数据库的表名，如果表名加s的话可省略