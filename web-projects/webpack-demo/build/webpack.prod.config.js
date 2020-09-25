const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const textWebpackPlugin = require('./plugins/textWebpackPlugin')
// 暗号：做⼈嘛，最重要的是开⼼
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // new textWebpackPlugin()
  ]
})