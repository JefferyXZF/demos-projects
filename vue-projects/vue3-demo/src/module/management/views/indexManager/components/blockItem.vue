<template>
  <div class="block-item">
    <div>
      <el-upload
        class="upload-block"
        drag
        action=""
        :auto-upload="true"
        :on-change="handleCrop"
        :before-upload="beforeAvatarUpload"
        :show-file-list="false">
        <el-image v-if="item.iconUrl" :src="item.iconUrl" fit="fill" class="avatar"></el-image>
        <i class="el-icon-plus" v-else></i>
      </el-upload>
    </div>
    <div class="title-box">
      <span>标题</span>
      <el-input v-model="item.themeTitle" :maxlength="4" class="title-input"></el-input>
    </div>
    <div class="contact-article">
      <el-button plain class="select-btn" @click="open">关联文章</el-button>
      <el-input v-model="item.articleTitle" placeholder="请选择关联文章" class="contact-input" readonly></el-input>
      <i class="el-icon-circle-plus-outline" v-if="showAdd" @click="add"></i>
      <i class="el-icon-delete" v-show="showDel" @click="del"></i>
    </div>
    <!-- 剪裁组件弹窗 -->
    <cropperImage
      :dialogVisible="showCropper"
      :cropper-option="cropperOption"
      :file-size="fileSize"
      @close="showCropper=false"
      @uploadCropper="uploadImg"
    />
  </div>
</template>
<script>
import uploadMixin from './mixin'
export default {
  name: 'blockItem',
  mixins: [uploadMixin],
  data () {
    return {
      cropperOption: {
        img: '',
        autoCropWidth: 110,
        autoCropHeight: 60
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.block-item {
  display: flex;
  margin-top: 20px;
  min-width: 720px;
  // .el-image {
  //   vertical-align: middle;
  // }
  .tips {
    margin-right: 16px;
    color: #66686c;
    font-size: 16px;
    line-height: 130px;
  }
  .upload-block {
    /deep/ .el-upload-dragger {
      width: 111px;
      height: 58px;
      line-height: 58px;
      // background: #ecedf2;
      border: 0;
    }
    .el-icon-plus {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding-top: 15px;
      color: #bfbfbf;
      font-size: 30px;
      background: #ecedf2;
    }
  }
  .title-box {
    margin-left: 14px;
    font-size: 16px;
    color: #66686c;
    line-height: 58px;
    .title-input {
      margin-left: 20px;
      width: 120px;
    }
  }
  .contact-article {
    margin-left: 20px;
    line-height: 58px;
    width: 390px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select-btn {
      color: #0067ed;
      border: 1px solid #0067ed;
    }
    .el-icon-circle-plus-outline,
    .el-icon-delete {
      font-size: 20px;
      color: #a7abb3;
      cursor: pointer;
    }
    .el-icon-delete {
      margin-left: 16px;
    }
  }
  .contact-input {
    flex: 1;
    margin-left: 16px;
    /deep/ .el-input__inner {
      padding-left: 0;
      border: none;
      border-bottom: 1px solid #dadee7;
      color: #999999;
      cursor: not-allowed;
    }
  }
}
</style>
