
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

console.log(
  '环境变量', process.env.NODE_ENV
)
module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(__dirname, '../src'),
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-formatter-friendly') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              corejs: 3
            }
          }
        ],
        include: path.resolve(__dirname, '../src'),
      }
    ]
  }
})   
console.log('环境', process.env.NODE_ENV)