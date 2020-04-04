// 模板项目
const webpack = require('webpack')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    clientLogLevel: 'warning', // 日志等级
    port: 8844,
    hot: true, // 热更新
    inline: true, // 默认开启 inline 模式，如果设置为 false, 开启 iframe 模式
    stats: 'errors-only',
    overlay: false, // 默认不开启，启用后当编译出错，会在浏览器全屏输出错误
    proxy: {
      '/do1cloud-authorization-single': {
        target: 'https://www.jhjyj.cn/do1cloud-authorization-single', // 测试服务器
        // target: 'https://izs.qhavtc.com/do1cloud-authorization-single', // 生产
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/do1cloud-authorization-single': '/'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.HotModuleReplacementPlugin() // 热更新插件
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@/module', path.resolve(__dirname, 'src/module'))
      .set('@/components', path.resolve(__dirname, 'src/components'))
      .set('@/management', path.resolve(__dirname, 'src/module/management'))
      .set('@/form', path.resolve(__dirname, 'src/module/form'))
  },
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: true,
  publicPath: './',
  runtimeCompiler: true,
  parallel: undefined,
  lintOnSave: false
}
