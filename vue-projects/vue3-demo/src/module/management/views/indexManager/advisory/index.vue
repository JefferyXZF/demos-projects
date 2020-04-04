<template>
 <!-- 添加立即咨询 -->
 <div class="advisory-main">
    <div>
        <!-- 头部  -->
        <div class="main-top mb-20">
            <h3>立即咨询管理</h3>
        </div>
        <!-- 立即咨询 -->
        <div class="hareForm form-advisory">
          <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
            <el-form-item label="立即咨询链接" prop="promptUrl">
                <el-input type="textarea" v-model="ruleForm.promptUrl" placeholder="请输入立即咨询链接" maxlength="500" show-word-limit></el-input>
            </el-form-item>
            <el-form-item class="form_btn">
                <el-button type="primary" class="form_btn_save" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
const api = require('@/api/index')
export default {
  name: 'contacts',
  data () {
    return {
      ruleForm: {
        promptUrl: ''
      },
      rules: {
        promptUrl: [
          { required: true, message: '请输入立即咨询链接', trigger: 'blur' },
          { min: 5, max: 500, message: '长度在 5 到 500 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交按钮
    onSubmit () {
      const _this = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const param = {
            promptUrl: decodeURI(this.ruleForm.promptUrl),
            id: 1
          }
          api.contractUpdate(param, _this).then(res => {
            this.$message.success('保存成功')
          }).catch(err => {
            console.log('test api post err:', err)
            this.msg = 'Post请求后台接口错误'
            this.$message.error(err)
          })
        }
      })
    },
    getContactsInfo () {
      const _this = this
      const id = 1
      api.contractInfo(id, _this).then(res => {
        this.ruleForm.promptUrl = encodeURI(res.promptUrl)
      }).catch(err => {
        console.log('test api post err:', err)
        this.msg = 'Get请求后台接口错误'
        this.$message.error(err)
      })
    }
  },
  created () {
    // this.getContactsInfo()
  }
}
</script>

<style lang="scss" scoped>
.advisory-main {
  height: calc(100vh - 110px);
  position: relative;
}
.form-advisory {
  overflow: unset;
}
.hareForm /deep/ .el-form-item__label{
    float: none;
}
.hareForm /deep/ .el-input{
    width: 50%;
}
.hareForm /deep/ .el-textarea{
    width: 50%;
    textarea{
      resize: none;
      height: 150px;
    }
}
.hareForm /deep/ .el-form-item__content{
    margin-left: 0 !important;
}
.back_title{
    color:#A8ABB3;
    font-size:18px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
}
.form_btn{
    display: flex;
    justify-content: center;
    padding: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    .form_btn_save {
      width: 150px;
      height: 45px;
    }
}
</style>
