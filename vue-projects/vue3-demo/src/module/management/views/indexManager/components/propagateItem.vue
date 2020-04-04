<template>
  <div class="propagate-item">
    <div>
      <el-upload
        class="upload-banner"
        drag
        action=""
        :auto-upload="true"
        :on-change="handleCrop"
        :before-upload="beforeAvatarUpload"
        :show-file-list="false"
      >
        <el-image v-if="item.iconUrl" :src="item.iconUrl" fit="contain" class="avatar"></el-image>
        <div v-else class="upload-box">
          <el-button type="primary" class="select-btn">选择图片</el-button>
          <div class="el-upload-tips">宣传图片</div>
          <div class="el-upload-tips">建议尺寸375px*176px</div>
        </div>
      </el-upload>
    </div>
    <div class="contact-article">
      <el-button plain class="select-btn article-btn" @click="open">关联文章</el-button>
      <el-input v-model="item.articleTitle" placeholder="请选择关联文章" class="contact-input" readonly></el-input>
      <i class="el-icon-circle-plus-outline" v-if="showAdd" @click="add"></i>
      <i class="el-icon-delete" v-show="showDel" @click="del"></i>
    </div>
    <!-- 剪裁组件弹窗 -->
    <cropperImage
      :dialogVisible="showCropper"
      :cropper-option="cropperOption"
      :file-size="fileSize"
      :cropper-style="cropperStyle"
      :zoom="1"
      @close="showCropper=false"
      @uploadCropper="uploadImg"
    />
  </div>
</template>
<script>
import uploadMixin from './mixin'
export default {
  name: 'propagateItem',
  mixins: [uploadMixin],
  props: {
    dataList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // 裁剪配置
      cropperOption: {
        img: '',
        autoCropWidth: 375,
        autoCropHeight: 176
      },
      cropperStyle: {
        width: '390px',
        height: '290px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.propagate-item{
  /deep/ .el-dialog{
    width: max-content;
    max-width: 860px;
    height: 470px;
  }
  /deep/ .el-image__inner {
    overflow: hidden;
    border-radius: 6px;
  }
}
.propagate-item {
  // display: flex;
  margin-top: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .tips {
    margin-right: 16px;
    color: #66686c;
    font-size: 16px;
    line-height: 130px;
  }
  .upload-banner {
    /deep/ .el-upload-dragger {
      width: 357px;
      height: 170px;
      line-height: 170px;
      // background: #ecedf2;
      border: 0;
    }
    .upload-box {
      height: 100%;
      background: #ecedf2;
    }
    .el-upload-tips {
      margin-top: 10px;
      font-size: 14px;
      color: #a7aebb;
    }
    .select-btn {
      margin-top: 50px;
    }

  }
  .contact-article {
    display: flex;
    padding-top: 20px;
    width: 357px;
    justify-content: space-between;
    align-items: flex-end;
    .article-btn {
      color: rgba(0, 103, 237, 1);
      border:1px solid rgba(0,103,237,1);
      width: 75px;
      height: 35px;
      padding: 0;
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
