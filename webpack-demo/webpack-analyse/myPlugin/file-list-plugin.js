
class FileListPlugin {
  apply(compiler) {
    // emit 是异步 hook, 使用 tapAsync 触发它，还可以使用 tapPromise/tap(同步)
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // 在生成文件中，创建一个头部字符串
      let filelist = 'In this build:\n\n';

      // 遍历所有编辑过的资源文件，
      for (const filename in compilation.assets) {
        filelist += '-' + filename + '\n'
      }

      // 将这个列表作为一个新的文件源，插入到 webpack 构建中
      compilation.assets['filelist.md'] = {
        source: function() {
          return filelist
        },
        size: function() {
          return filelist.length
        }
      }
      callback()
    })
  }
}

module.exports = FileListPlugin