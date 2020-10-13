const path = require('path')
const config = require('../config');

// const resolve = (filepath) => {
//   return path.resolve(__dirname, '../', filepath)
// }

module.exports = {
  context: path.resolve(__dirname, '../'), // 上下文，修正为工作目录
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name][chunkhash:8].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsRoot
      : config.dev.assetsPublicPath
  },
  // resolve: {
  //   extensions: ['.js', '.json']
  // }
}