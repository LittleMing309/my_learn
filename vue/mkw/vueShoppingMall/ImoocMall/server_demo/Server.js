const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;

    console.log(url.parse(req.url))

    fs.readFile(pathname.substring(1),(err,data)=>{
        if(err){
            res.writeHead(404,{
                'Content-Type': 'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.write(data.toString());
        }

        res.end();
    })
}).listen(3000,'127.0.0.1',()=>{
    console.log('服务器已启动，请打开浏览器输入http://127.0.0.1:3000/来访问……');
})