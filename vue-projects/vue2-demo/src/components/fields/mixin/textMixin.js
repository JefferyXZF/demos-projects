import checkURL from '@/assets/js/common/work/handleUrl'

export const textMixin = {
  props: {
    field: {
      type: Object,
      required: true
    },
    fieldIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    maxLength () {
      return this.field.maximum_length || 2000
    },
    disabled () {
      return this.field.disabled || this.field.readOnly
    }
  },
  methods: {
    // 修改 store 字段 value 值
    setValue (value) {
      let tips = (!this.disabled && !this.field.required && !value)
        ? this.field.help : ''
      this.$set(this.field, 'tips', tips)
      this.$emit('change', value, this.fieldIndex)
    },
    // 过滤文本，使用标签替换 http/https 路径
    filterTextContent (str) {
      if (!str) {
        return str
      } else {
        return str.includes('http') ? checkURL(str, false) : String(str)
      }
    },
    validate () {

    }
  }
}
