module.exports = (req,res)=>{
  res.json({
    data:[
      {id:1,title:'标题一',portrait:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148200059,2148086178&fm=11&gp=0.jpg',time:new Date(),clickNum:6},
      {id:2,title:'标题二',portrait:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=841983422,1273167837&fm=111&gp=0.jpg',time:new Date(),clickNum:3},
      {id:3,title:'标题三',portrait:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=728127551,664296612&fm=111&gp=0.jpg',time:new Date(),clickNum:6},
      {id:4,title:'标题四',portrait:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2923846288,2346052074&fm=111&gp=0.jpg',time:new Date(),clickNum:2},
      {id:5,title:'标题五',portrait:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166639134,1440270722&fm=26&gp=0.jpg',time:new Date(),clickNum:1},
      {id:6,title:'标题六',portrait:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg',time:new Date(),clickNum:7},
    ],
    message:'头像数据返回成功'
  })
}