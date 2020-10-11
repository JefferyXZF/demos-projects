/**
 * Babel 插件编写
 * 在 Babel 中，代码会由 Babel 先行解析成 AST，Babel 插件做的事情就是写 vistor 而已
 */
module.exports = () => {
  return {
    name: 'example-plugin',
    visitor: {
      Identifier (path, state) {
        // 一顿操作猛如虎
      }
    }
  }
}