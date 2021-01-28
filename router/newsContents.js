module.exports = (req,res)=>{
  const data=[
    {id:1,title:'标题一',time:new Date(),clickNum:6,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'},
    {id:2,title:'标题二',time:new Date(),clickNum:3,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'},
    {id:3,title:'标题三',time:new Date(),clickNum:6,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'},
    {id:4,title:'标题四',time:new Date(),clickNum:2,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'},
    {id:5,title:'标题五',time:new Date(),clickNum:1,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'},
    {id:6,title:'标题六',time:new Date(),clickNum:1,content:'内容...内容内容...内容内容...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>内容'}
  ]
  let result = data.find((item)=>{
    return item.id == req.query.id
  })
  res.json({
    data:result,
    message:'新闻内容获取成功'
  })
}