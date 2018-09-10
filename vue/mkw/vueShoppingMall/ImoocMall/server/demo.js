// let user = require('./User');

// console.log(`username：${user.userName}`)
// console.log( user.sayWorld())

const http = require('http');
const url = require('url');
const util = require('util');

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain charset=utf-8');
    console.log(`url: ${req.url}`);
    res.end(util.inspect(url.parse(req.url)));
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器已启动，请打开浏览器输入http://127.0.0.1:3000/来访问……');
})