const express = require('express')

const app = express()

//轮播图图片地址
app.get('/swipe',require('./router/swipe'))

app.listen(3000,()=>{
  console.log('running');
})