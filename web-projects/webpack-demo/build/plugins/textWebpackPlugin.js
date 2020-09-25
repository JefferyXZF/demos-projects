
class TextWebpackPlugin {
  constructor () {

  }

  // compiler: webpack 实例
  apply(compiler) {
    // hooks.emit 定义在某一个时刻
    compiler.hooks.emit.tapAsync("txtWebpackPlugin", (compilation, cb) => {
      console.log(compilation.assets)
      
      compilation.assets["my.txt"] = {
        source: function () {
          return 'hello the world'
        },
        size: function () {
          return 1024
        }
      }

    })
  }
}

module.exports = TextWebpackPlugin