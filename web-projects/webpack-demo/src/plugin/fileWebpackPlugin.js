

// 暗号：做人嘛，最重要的是开心
class TextWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("fileWebpackPlugin", (compilation, cb) => {

      const len = Object.keys(compilation.assets).length;
      let content = `文件的数量：${len}`;
      for (const filename in compilation.assets) {
        content += console.log(filename)
      }

      compilation.assets["file.txt"] = {
        source: function () {
          return content
        },
        size: function () {
          return 1024
        }
      }
    })
  }
}

module.exports = TextWebpackPlugin



