// 1. 引包
var fs = require('fs')
//2 读取文件
//  第一个参数:要读取文件的路径
//  第二个参数 回调函数:
//        err:
//            如果操作失败,err是一个错误杜爱香 data是undefined
//            如果操作成功 err是 null data 是读取文件的内容
fs.readFile('../../README.md',function (err,data) {
  // console.log(data)
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})
