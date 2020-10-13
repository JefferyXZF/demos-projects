const webpack = require('webpack')

const webpackDevConfig = require('./build/webpack.config.dev')

const compiler = webpack(webpackDevConfig)

Object.keys(compiler.hooks).forEach(hookName => {
  if(compiler.hooks[hookName].tap) {
    compiler.hooks[hookName].tap('anyString', () => {
      console.log(`run -> ${hookName}`)
    })
  }
})

compiler.run()