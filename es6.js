// es6常用语法

// 1，let const

let a = 111 /**和var一样，是一个块级作用域 */

if(True){
    var b = 222
    let c = 333
}
console.log(b) // 可以打印
console.log(c) // 报错，未定义

const PI = 3.14159 /**定义常量，不可变 */



// 2，模版字符串

var name = '张三'
var age = 20
console.log(name+'的年龄是'+age)

console.log(`${name}的年龄是${age}`)



// 3，属性的简写 方法的简写

var name = 'zhangsan'
var app = {
    name,
    // name: name,
    run(){
        console.log(`${this.name}在跑步`)
    },
    // run: function(){
    //     console.log(`${this.name}在跑步`)
    // }
}
console.log(app.name)
console.log(app.run())



// 4，箭头函数，this指向上下文

// setTimeout(function(){
//     console.log('执行')
// }, 1000)

setTimeout(()=>{
    console.log('执行')
}, 1000)



// 5，回调函数

function getData(callback){
    // ajax
    setTimeout(function(){
        var name='张三'
        callback(name)
        // return name // 错误写法
    }, 1000)
    // return name // 错误写法
}
// 外部获取异步方法里面的数据
getData((data)=>{
    console.log(data) // 张三
})



// 6，异步处理Promise
/**
    resolve,成功的回调函数
    reject,失败的回调函数
 */

var p = new Promise(function(resolve, reject){
    // ajax
    setTimeout(function(){
        var name = '张三'
        resolve(name)
    }, 1000)
})
p.then((data)=>{
    console.log(data) // 张三
})



// 7，async，await
/** 
    async 申明一个异步的方法
    await 等待异步方法执行完成，可以获取异步方法里面的数据，但是必须用在异步的方法中
 */

function getData(){
    return '这是一个普通方法'
}
console.log(getData())

async function getData(){
    console.log(2)
    return '这是一个异步方法'
}
console.log(getData()) // 返回一个Promise

getData().then(data=>{
    console.log(data)
}) 

var d = await getData() // 错误写法

async function test(){
    console.log(1)
    var d = await getData()
    // console.log(d) // 这是一个异步方法
    console.log(3)
}

// await 异步方法转为同步
test() //1,2,3

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var name = '张三'
            resolve(name)
        }, 1000)
    })
}
var p = getData()
p.then(data=>{
    console.log(data)
})

async function test(){
    var data = await getData()
    console.log(data)
}
test()
