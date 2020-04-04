<template>
  <el-dialog
    title="图片剪裁"
    :visible="dialogVisible" append-to-body
    @close="close"
  >
    <div class="cropper-content">
      <div class="cropper" style="text-align:center">
      <vue-cropper
          ref="cropper"
          :img="option.url"
          :canScale="option.canScale"
          :autoCrop="option.autoCrop"
          :fixedNumber="option.fixedNumber"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :outputType="option.outputType"
          :full="option.full"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :fixed="option.fixed"
          :centerBox="option.centerBox"
          :infoTrue="option.infoTrue"
          :fixedBox="option.fixedBox"
        />
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="finish" :loading="loading">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { VueCropper } from 'vue-cropper'
// https://tqy.do1.net.cn/dev/portal/imageupload/imageUploadAction!doUploadFile.action

export default {
  name: 'ImageCropper',
  components: {
    // vueCropper
  },
  data () {
    return {
      // 裁剪组件的基础配置option
      option: {
        url: '', // 裁剪图片的地址
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        info: true, // 裁剪框的大小信息
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 375, // 默认生成截图框宽度
        autoCropHeight: 167, // 默认生成截图框高度
        fixedBox: false, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [2, 1], // 截图框的宽高比例
        canMove: true, // 上传图片是否可以移动
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        full: false, // 是否输出原图比例的截图
        enlarge: '0.1', // 图片根据截图框输出比例倍数
        mode: 'contain' // 图片默认渲染方式
      },
      picsList: [], // 页面显示的数组
      // 防止重复提交
      loading: false
    }
  },
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    imgUrl (value) {
      this.option.url = value
    }
  },
  created () {
    // this.option.url = this.imgUrl
    // this.option.url = require('@/assets/logo.png')
  },
  methods: {
    // 上传按钮   限制图片大小
    changeUpload (file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        return false
      }
      this.fileinfo = file
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.option.url = file.url
        this.dialogVisible = true
      })
    },
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish () {
      this.$refs.cropper.getCropBlob((data) => {
        console.log(data)
        // var fileName = 'goods' + this.fileinfo.uid
        // this.loading = true
        // // 上传阿里云服务器
        // client().put(fileName, data).then(result => {
        //   this.dialogVisible = false
        //   this.picsList.push(result.url)
        // }).catch(err => {
        //   console.log(err)
        //   this.loading = false
        // })
      })
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.cropper-content .cropper {
  width: auto;
  height: 300px;
}
</style>
