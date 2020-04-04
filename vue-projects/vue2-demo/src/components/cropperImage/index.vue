<template>
  <div>
    <!-- 单图片上传 :on-change="handleCrop"-->
    <el-upload
      class="avatar-uploader"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleCrop"
    >
      <div class="el-upload__text">点击上传</div>
        <div class="el-upload__tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
    </el-upload>
    <!-- 剪裁组件弹窗 -->
    <imageCropper
      :img-url="imgUrl"
      :dialogVisible="showCropper"
      @close="showCropper=false"
      @upload="upload"
    />
  </div>
</template>
<script>
import imageCropper from './cropper'
// import axios from '@/assets/js/axios'
export default {
  name: 'CropperContainer',
  components: {
    imageCropper
  },
  data () {
    return {
      file: {}, // 当前被选择的图片文件
      imgUrl: '',
      uploadList: [], // 上传图片列表
      showCropper: false // 展示弹窗开关
    }
  },
  methods: {
    handleCrop (file, files) {
      // 点击弹出剪裁框
      this.file = file || {}
      this.$nextTick(() => {
        this.imgUrl = window.URL.createObjectURL(file.raw)
        console.log(this.imgUrl)
        console.log(file)
        this.showCropper = this.uploadValidator(file)
      })
    },
    uploadFile (file) {
      let _this = this
      //普通的判断可以用return false
      // 获取文件尺寸，判断尺寸在不在规定范围之内
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (theFile) {
          let image = new Image()
          image.src = theFile.target.result
          image.onload = function () {
            let csize = `${this.width}*${this.height}`
            console.log('wi', csize)
            if (this.width > 375 || this.height > 167) { // this.creativeSize是可以上传的尺寸列表数组
              // _this.$message.error(`${file.name}尺寸不对，请重新上传！`)
              reject('图片尺寸不对')
            } else {
              file.width = this.width
              file.height = this.height
              resolve(file)
            }
          }
        }
      })
    },
    uploadValidator (file) {
      const isLt5M = file.size / 1024 / 1024 > 5
      if (isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        return false
      }
      return true
    },
    upload () {

    },
    // upload (data) {
    //   // 自定义upload事件
    //   if (!this.multiple) {
    //     // 如果单图，则显示正在上传
    //     this.$refs.uploading.style.display = 'block'
    //   }
    //   let formData = new FormData()
    //   formData.append('attachment', data)
    //   axios.post(this.targetUrl, formData).then(res => {
    //     if (!this.multiple) {
    //       // 上传完成后隐藏正在上传
    //       this.$refs.uploading.style.display = 'none'
    //     }
    //     if (res.msg === 'success') {
    //       // 上传成功将照片传回父组件
    //       const currentPic = res.data.url
    //       if (this.multiple) {
    //         this.uploadList.push({
    //           url: currentPic,
    //           uid: '111'
    //         })
    //         this.uploadList.pop()
    //         this.$emit('imgupload', this.formatImgArr(this.uploadList))
    //       } else {
    //         this.$emit('imgupload', currentPic)
    //       }
    //     } else {
    //       // 上传失败则显示上传失败，如多图则从图片列表删除图片
    //       if (!this.multiple) {
    //         this.$refs.failUpload.style.display = 'block'
    //       } else {
    //         this.uploadList.pop()
    //       }
    //     }
    //   })
    //   this.cropperModel = false
    // },
    formatImgArr (arr) {
      const result = arr.map((item, index) => {
        if (typeof item === 'string') {
          return {
            url: item,
            uid: `index${index}`
          }
        } else {
          return item.url
        }
      })
      return result
    }
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    color: #8c939d;
    text-align: center;
  }
  .avatar {
    display: block;
  }
  .reupload {
    border-radius: 50%;
    position: absolute;
    color: #fff;
    background-color: #000000;
    opacity: 0.6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  #uploadIcon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
</style>
