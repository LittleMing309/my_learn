const http = require('http');
const util = require('util');

http.get('http://202.108.121.81:38089/gw-cms/api/getNewsList.do?columns=c8a5516f267a4271a4e268f2f19afed0&page=1&size=7',(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk;
    })
    res.on('end',()=>{
        let result = JSON.parse(data);
        console.log(result);
    })
})