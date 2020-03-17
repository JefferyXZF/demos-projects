<template>
  <div class="about">
    <qwb-rich-text
      v-model="content"
      :base-url="'https://qy.do1.com.cn/qwy'"
      :file-down-url="'https://qwyimg.do1.com.cn/fileweb'"
      ></qwb-rich-text>

    <div v-html="content">

    </div>
  </div>
</template>

<script>
import xss from 'xss'
const optionsConfig = {
  // 白名单配置
  whiteList: {
    div: ['style', 'class'],
    p: ['style', 'class'],
    span: ['style', 'class'],
    em: ['style', 'class'],
    strong: ['style'],
    a: ['href', 'title', 'target', 'rel'],
    img: ['class', 'src', 'style', 'width', 'height', 'alt', 'title'],
    pre: ['class'],
    code: ['style'],
    iframe: ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
    ul: ['style', 'class'],
    ol: ['style', 'class'],
    li: ['style'],
    blockquote: ['style'],
    table: ['style', 'border', 'cellspacing', 'cellspacing', 'data', 'class', 'interlaced'],
    caption: ['class', 'style'],
    tbody: ['style'],
    tr: ['style', 'class'],
    td: ['style', 'scope', 'align', 'width', 'height'],
    th: ['style', 'scope', 'align', 'width', 'height']
  },
  stripIgnoreTag: true,
  // 去掉不在白名单上的标签及标签体，*|true表示去掉所有不在白名单的标签，false表示不进行处理，['tag1','tag2']仅去掉指定的不在白名单的标签
  stripIgnoreTagBody: ['script', 'svg']
}
export default {
  data () {
    return {
      valueText: ''
    }
  },
  computed: {
    content: {
      get () {
        return this.$store.state.dragDemo.richContent
      },
      set (value) {
        this.$store.state.dragDemo.richContent = xss(value, optionsConfig)
        // this.$store.state.dragDemo.richContent = xss(value)
      }
    }
  },
  create () {
    xss('value', optionsConfig)
  }
}
</script>

<style>

</style>
