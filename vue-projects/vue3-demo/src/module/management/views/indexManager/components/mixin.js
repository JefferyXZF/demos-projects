import cropperImage from './cropperImage'
const api = require('@/api/index')

const uploadMixin = {
  components: {
    cropperImage
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    showAdd: {
      // 是否显示新增按钮
      type: Boolean,
      default: false
    },
    idx: {
      // 索引
      type: Number,
      required: true
    },
    showDel: {
      // 是否显示删除
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      // uploadUrl: '/qhjz/qhjzRotationPicture/uploadFile',
      showCropper: false, // 显示裁剪弹窗
      canCropper: false,
      fileSize: 2 // 限制文件上传大小
    }
  },
  methods: {
    handleCrop (file) {
      this.$nextTick(() => {
        if (this.canCropper) {
          this.cropperOption.img = window.URL.createObjectURL(file.raw)
          this.showCropper = this.canCropper
        }
      })
    },
    // 上传前校验
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
      const isLt2M = (file.size / 1024 / 1024) < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      // 校验通过后显示裁剪框
      this.canCropper = isJPG && isLt2M
      return false
    },
    // 自定义上传方法
    uploadImg (file, fileName) {
      const fileFormData = new FormData()
      fileFormData.append('file', file)
      const _this = this
      // 移除上传组件带来的bug
      document.getElementsByTagName('body')[0].removeAttribute('style')
      api.uploadFile(fileFormData, this).then(res => {
        _this.item.iconUrl = res
        _this.showCropper = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    del () {
      // 删除
      this.$emit('delete', this.idx)
    },
    add () {
      // 新增
      this.$emit('add')
    },
    open () {
      // 打开关联文章
      this.$emit('open', this.idx, this.type)
    }
  }
}

export default uploadMixin
