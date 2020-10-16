const showdown = require('showdown')
const loadUtils = require('loader-utils')


module.exports = function(content, sourcemap) {
  const options = loadUtils.getOptions(this)

  this.cacheable()

  const converter = new showdown.Converter(options)

  content = converter.makeHtml(content)

  this.callback(null, content)
}