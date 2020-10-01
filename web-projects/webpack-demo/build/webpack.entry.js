const glob = require("glob")
const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

// 多页面打包通用方案
const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  
  const entryFiles = glob.sync(path.join(__dirname, "../src/module/*/index.js"))

  Object.keys(entryFiles).map(item => {
    const entryFile = entryFiles[item]
    const match = entryFile.match(/src\/module\/(.*)\/index\.js$/)
    const pageName = match && match[1]

    entry[pageName] = entryFile
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        title: pageName,
        template: path.join(__dirname, `../src/module/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = setMPA()
console.log(entry, htmlWebpackPlugins )
