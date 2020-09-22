/*!
 * @description  一些简单的html操作
 * @date         2019/09/25
 */

const handleHtml = {
  // html转换成纯文本
  htmlToText (str) {
    if (!str) {
      return ''
    }
    if (typeof str !== 'string') {
      str = JSON.stringify(str)
    }
    str = str.replace(/(<a[^>]+?href="([^"]+)"[^>]*>([^<]+)<\/a>)|([rl("]?[rl(']?[rl(]?[=]?['"]?)(http(s)?:\/\/[a-zA-Z0-9]+.[a-zA-Z0-9]+[a-zA-Z0-9,$%#&/?\-=._;:]+)/g, '【网页链接】')
      .replace(/&nbsp;/g, ' ')
      .replace(/<img(.*?)>/g, '【图片】')
      .replace(/(<(\/)?(p|ol|em|li|ul|strong|code|br|div|section)(.*?)>)|<span(.*?)>|<\/span>|<h[1-9](.*?)>|<\/h[1-9]>|<br\/>|<!--[\s\S]*?-->/g, '')
      .replace(/<table.*?>[\s\S]*?<\/table>/g, '【表格】')
      .replace(/<iframe.*?>[\s\S]*?<\/iframe>/g, '【视频】')
    return str
  },

  /**
   * 获取滚动条距离顶端的距离
   * @return scrollPos: 滚动条与顶端的距离
   * 相关参考文档
   * https://blog.csdn.net/qq_38698753/article/details/80852899
   * https://www.cnblogs.com/fullhouse/archive/2012/01/17/2324706.html
   */
  getScrollTop () {
    let scrollPos
    if (window.pageYOffset) {
      scrollPos = window.pageYOffset
    } else if (document.compatMode && document.compatMode !== 'BackCompat') {
      scrollPos = document.documentElement.scrollTop
    } else if (document.body) {
      scrollPos = document.body.scrollTop
    }
    return scrollPos
  },

  /**
   * 指定时间内滚动条平滑滚动到指定位置
   * @params number: 滚动的目标值，time: 滚动时间
   * 相关参考文档
   * https://blog.csdn.net/qq_39624107/article/details/81132981
   */
  setScrollTop (number = 0, time = 0) {
    if (!time) {
      window.scrollTo(0, number)
      return number
    }
    // 设置循环的间隔时间  值越小消耗性能越高
    const spacingTime = 20
    // 计算循环的次数
    let spacingIndex = time / spacingTime
    // 获取当前滚动条位置
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop
    // 计算每次滑动的距离
    const everTop = (number - nowTop) / spacingIndex
    const scrollTimer = setInterval(() => {
      if (spacingIndex > 0) {
        spacingIndex--
        this.setScrollTop(nowTop += everTop)
      } else {
        clearInterval(scrollTimer)
      }
    }, spacingTime)
  },

  /**
   * 复制文本到剪切板
   * @params el: 需要复制的文字所在的dom元素, number: 复制的字数
   * 相关参考文档
   * https:https://www.clzg.cn/article/28154.html
   */
  copyText (el, number = 1000) {
    const text = el.innerText
    const oInput = document.createElement('input')
    oInput.setAttribute('readonly', 'readonly')
    oInput.setAttribute('value', text)
    document.body.appendChild(oInput)
    oInput.setSelectionRange(0, number)
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    document.body.removeChild(oInput)
  }
}

export default handleHtml
