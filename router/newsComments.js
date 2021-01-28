module.exports = (req,res)=>{
  const data=[
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'},
    {user:'匿名用户',time:new Date(),content:'内容...内容内容...内容内容...'}
  ]
  
  res.json({
    data,
    message:'新闻内容获取成功'
  })
}