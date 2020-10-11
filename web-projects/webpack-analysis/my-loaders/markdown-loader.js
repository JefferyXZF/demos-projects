

/**
 * 引入转化 markdown 模块
 * API 链接 https://www.npmjs.com/package/showdown
 */
const showdown = require('showdown')

/**
 * 获取 loader 的 options 参数值
 * API 链接 https://www.npmjs.com/package/loader-utils
 */
const loaderUtils = require('loader-utils')

/**
 * mark-loader 将 markdown 内容转化为 html
 * @param {String} source 源码
 */
module.exports = function(content) {
  // 获取 options { simplifiedAutoLink: true, tables: true }
  const options = loaderUtils.getOptions(this)
  // 设置 cache
  this.cacheable()
  // 初始化 showdown 转换器
  const converter = new showdown.Converter(options)
  // 处理 content
  content = converter.makeHtml(content)
  // 返回结果
  this.callback(null, content)
}