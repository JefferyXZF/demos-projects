
// 多入口文件打包

const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * 多页面打包通用方案
 */
const getEntry = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.resolve(__dirname, '..', './src/module/*/index.js'))

  Object.keys(entryFiles).map(item => {
    const entryFile = entryFiles[item]
    // const match = entryFile.match(/src\/module\/(.*)\/index\.js$/)
    const match = entryFile.match(/src\/module\/(.*)\/index\.js$/)
    const pageName = match && match[1]

    entry[pageName] = entryFile
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
      title: pageName,
      template: path.resolve(__dirname, '..', `./src/module/${pageName}/index.html`),
      filename: `${pageName}.html`,
      chunks: [pageName],
      inject: true
    }))
  })

  return { entry, htmlWebpackPlugins }
}

module.exports = getEntry()