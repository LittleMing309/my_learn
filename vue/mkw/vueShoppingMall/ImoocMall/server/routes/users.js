var express = require('express');
var router = express.Router();
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test',function(req, res, next){
    res.send('test page');
});

// 登陆
router.post('/login', (req, res, next)=>{
    let param = {
        userName : req.body.userName,
        userPwd : req.body.userPwd
    }
    User.findOne(param, (err, doc)=>{
        if (err) {
            res.json({
                status : '1',
                msg : err.message
            })
        } else {
            console.log(doc)
            if (doc) {
                res.cookie('userId', doc.userId, {
                    path : '/',
                    maxAge : 1000*60*60
                })
                res.cookie('userName', doc.userName, {
                    path: '/',
                    maxAge: 1000*60*60
                })
                // req.session.user = doc
                res.json({
                    status : '0',
                    msg : '',
                    result : {
                        userName : doc.userName
                    }
                })
            } else {
                res.json({
                    status : '1',
                    msg : ''
                })
            }
        }
    })
});

// 登出
router.post('/logout', (req, res, next)=>{
    res.cookie('userId',"",{
        path: '/',
        maxAge: -1
    })
    res.cookie('userName',"",{
        path: '/',
        maxAge: -1
    })
    res.json({
        status: '0',
        msg: '',
        result: ''
    })
})

// 检测是否登陆
router.get('/checkLogin', (req, res, next)=>{
    if (req.cookies.userId) {
        res.json({
            status: '0',
            msg: '',
            result: req.cookies.userName || ''
        })
    } else {
        res.json({
            status: '1',
            msg: '未登录',
            result: ''
        })
    }
}) 

// 查询当前用户的购物车数据
router.get('/cartList', (req, res, next)=>{
    let userId = req.cookies.userId
    User.findOne({userId: userId}, (err, doc)=>{
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        } else {
            if (doc) {
                res.json({
                    status: '0',
                    msg: '',
                    result: doc.cartList
                })
            }
        }
    })
})

// 购物车删除
router.post('/cartDel', (req, res, next)=>{
    let userId = req.cookies.userId
    let productId = req.body.productId
    User.update({
        userId: userId
    },{
        $pull: {
            'cartList': {
                'productId': productId
            }
        }
    }, (err, doc)=>{
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: '0',
                msg: '删除成功！',
                result: 'suc'
            })
        }
    })
})

module.exports = router;
