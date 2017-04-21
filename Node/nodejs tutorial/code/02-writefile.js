var fs = require('fs')
// 写文件
// 第一个参数: 写入文件的路径
// 第二个参数:写入文件的内容
// 第三个参数:回调函数
//  成功 err是错误对象 
//  失败 err 是null 
fs.writeFile('./data/a.txt','你好,Node.js',function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('写入成功')
})
