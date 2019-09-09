// 引入koa模块
var Koa = require('koa')
var Router  = require('koa-router')

// 实例化
var app = new Koa()
var router = new Router()

// 配置路由，中间件 koa-router
// ctx,上下文context,包含request和response等信息
router.get('/', async (ctx)=>{
    ctx.body = '首页' // 返回数据，相当于原生里面的res.writeHead()  res.send()
}).get('/news', async (ctx)=>{
    ctx.body = '这是新闻页面'
})

// 获取get传值
// http://localhost:3000/newscontent?abc=123
router.get('/newscontent', async (ctx)=>{
    // 在koa中 GET 传值通过request接收，但是接收的方法有两种:quer 和 querystring
    // query 返回的是格式化好的参数对象
    // querystring 返回的是请求字符串

    // 从ctx中读取get传值
    console.log(ctx.query) // {abc:'123',name='zhangsan'} 获取到的是对象
    console.log(ctx.querystring) // abc=123&name=zhangsan 获取到的是字符串

    console.log(ctx.url) // 获取url地址

    // 从ctx中的request中读取get传值
    console.log(ctx.request.query) // {abc:'123',name:'zhangsan'} 获取到的是对象
    console.log(ctx.request.querystring) // abc=123&name=zhangsan 获取到的是字符串

    console.log(ctx.request.url) // 获取url地址

    ctx.body = '这是新闻详情页'
})

// 动态路由
// http://localhost:3000/newscontent/xxx
router.get('/newscontent/:abc', async (ctx)=>{
    // 获取动态路由的传值

    console.log(ctx.params) // {abc: 'xxx'}

    ctx.body = '新闻详情'
})

// 动态路由传多个值
// http://localhost:3000/newscontentsmall/xxx/yyy
router.get('/newscontentsmall/:abc/:def', async (ctx)=>{
    // 获取动态路由的传值

    console.log(ctx.params) // {abc: 'xxx', def: 'yyy}

    ctx.body = '新闻更细详情'
})

// 中间件
// 中间件就是匹配路由之前或者匹配路由完成做的一系列操作
// 在express中间件（middleware）是一个函数，
// 可以访问请求对象（request）响应对象（response），和web应用中处理请求-响应循环流程中的中间件
// 一般被命名为next的变量
// 中间件的功能：
//    执行任何代码
//    修改请求和响应对象
//    终结请求-响应循环
//    调用堆栈中的下一个中间件



// 启动路由
app
    .use(router.routes())
    .use(router.allowedMethods())

// express配置方式
// app.use(function(req,re){
//     res.send('返回数据')
// })

// 最简单配置，无路由配置
// app.use(async (ctx)=>{
//     ctx.body  = '你好，koa2.3'
// })

app.listen(3000)