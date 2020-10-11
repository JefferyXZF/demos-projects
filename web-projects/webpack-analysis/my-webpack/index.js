
const fs = require('fs')
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default

// 读取 source.js 内容
let source = fs.readFileSync(__dirname + '/source.js')
console.log(source)

// 使用 babel.parse 方法

babel.parse(source, (err, ast) => {
  // ast 就是树
  console.log(ast)
})