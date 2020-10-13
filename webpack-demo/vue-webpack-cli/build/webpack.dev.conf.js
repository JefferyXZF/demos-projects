const { merge } = require('webpack-merge')
const webpack = require('webpack')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const HOST = process.env.host
const PORT = process.env.port

const devWebpackConfig = merge(baseWebpackConfig, {
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  // devtool: config.dev.devtool,
  // devServer: {
  //   clientLogLevel: 'warning', // 日志等级
  //   hot: true,
  //   contentBase: false,
  //   host: HOST || config.dev.host,
  //   port: PORT || config.dev.port,
  //   open: config.dev.autoOpenBrowser,
  //   inline: true, // 默认开启 inline 模式，如果设置为 false, 开启 iframe 模式
  //   stats: 'errors-only',
  //   overlay: config.dev.errorOverlay
  //     ? { warnings: false, errors: true }
  //     : false,
  //   publicPath: config.dev.assetsPublicPath,
  //   proxy: config.dev.proxyTable,
  //   quiet: false, // necessary for FriendlyErrorsPlugin
  //   watchOptions: {
  //     poll: config.dev.poll
  //   }
  // }
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
