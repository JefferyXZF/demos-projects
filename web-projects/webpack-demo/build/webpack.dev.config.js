const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
module.exports = merge(baseConfig, {
  mode: 'development'
})
console.log('环境', process.env.NODE_ENV)