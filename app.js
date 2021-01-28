const express = require('express')

const app = express()

//轮播图图片地址
app.get('/swipe',require('./router/swipe'))
//新闻列表
app.get('/newsList',require('./router/newsList'))
//新闻内容
app.get('/newsContent',require('./router/newsContents'))
//新闻评论
app.get('/newsComment',require('./router/newsComments'))

app.listen(3000,()=>{
  console.log('running');
})