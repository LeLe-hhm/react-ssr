const express = require('express')
const app = express()
let list = require('./list.json')
app.get('/api/user/list', (req, res) => {
    // header设置 支持跨域调用
    res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Allow-Method', 'GET,POST')
    // res.header('Content-Type', 'application/json,charset=utf-8')
    res.json(list)
})
app.listen(3000, () => {
    console.log('user data mock server 3000 start.....')
})