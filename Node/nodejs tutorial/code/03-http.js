//引包
var http = require('http')
// 创建服务器
var server = http.createServer()
// 2. 设置一个请求处理函数
// request 请求事件是所有请求的入口
// 也就是说任何请求进来的都会出发该事件 然后执行回调处理函数
// 第二个参数 接受两个参数
//  request :请求对象,用来接受获取客户端请求的一些数据信息,例如当前请求的数据
//  
//  response: 响应随想 用来给本地请求返回数据
server.on('request',function (req,res) {
  // console.log('收到客户端请求了')
  res.end('hello world')

})
//3. 监听端口号,启动服务
//  IP地址:定位一台计算机
//  端口号:定位计算机上的应用程序
server.listen(3000,function () {
  console.log('running....')
})
