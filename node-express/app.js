const express = require('express');
const path = require('path');

// 创建express 实例
const app = express();

// 改写
const http = require('http');
const server = http.createServer(app);

server.listen('3000', () => {
    console.log('正在运行')
    console.log('http://localhost:3000')
})

app.all('*', function(req, res, next) {
    console.log('=================',req)
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",‘ 3.2.1‘)
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/api/user', (req, res, next) => {
    console.log(Object.keys(req))
    console.log(req.headers)
    console.log(req.query)
    console.log(Object.keys(res))
    res.send('Hello World')
})