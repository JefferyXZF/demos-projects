/*!
 * @description  一些简单URL处理
 * @date         2019/09/25
 */

const handleUrl = {
  /**
   * URL识别
   * @params str: 含url链接的文本，replaceSpace：是否替换空格（包括换行），keepWrap：是否保留换行
   */
  checkURL (str, replaceSpace, keepWrap) {
    if (!str) {
      return ''
    }
    if (typeof str !== 'string') {
      str = JSON.stringify(str)
    }
    if (replaceSpace) {
      // 替换转义，兼容以前的代码
      str = this.getUrlHtml(str.replace(/&nbsp;/g, '').replace(/<br>/g, ''))
      // 替换空格
      str = str.replace(/\n/g, '<br>').replace(/\u3000/g, '&emsp;').replace(/\u0020/g, '&nbsp;')
    }
    if (!keepWrap) {
      str = str.replace(/\n/g, '<br>')
    }
    str = str.replace(/([rl("]?[rl(']?[rl(]?[=]?['"]?)(http(s)?:\/\/[a-zA-Z0-9]+.[a-zA-Z0-9]+[a-zA-Z0-9,$%#&/?\-=._;:]+)/gi, (match, first, second, pos, origin) => {
      const pre = str.substr(origin - 5, 5)
      // 判断url是否为元素中的属性值
      if (
        this.isIncludes(first, [`="`, `='`, `rl('`, `rl(`], true) ||
        this.isIncludes(pre, [`="`, `='`, `rl('`, 'rl(', 't;', 'rc', '9;'])
      ) {
        return match
      } else {
        const style = 'display: inline-block;padding: 2px 10px 2px 7px;margin: 0 5px;border: 1px solid #d9d9d9;font-size: 12px;color: #5454cd;vertical-align: middle;'
        return first + "<a style='" + style + "' target='_blank' title=" + second + " href='" + second + "'><i class='qw-icon-link'></i><span>网页链接</span></a>"
      }
    })
    return str
  },

  getUrlHtml (str) {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
  },

  isIncludes (str, arr, isEqual) {
    return arr.some(item => {
      return isEqual ? str === item : str.indexOf(item) !== -1
    })
  }
}

export default handleUrl
