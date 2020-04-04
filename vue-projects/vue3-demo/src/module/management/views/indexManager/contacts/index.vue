<template>
 <!-- 添加联系方式 -->
 <div class="contacts-container">
    <div class="contacts-content">
        <!-- 头部  -->
        <div class="main-top mb-20">
            <h3>联系方式管理</h3>
        </div>
        <!-- 联系方式 -->
        <div class="hareForm contacts-form">
          <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
            <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address" placeholder="请输入地址" maxlength="30" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="contracts">
                <el-input v-model="ruleForm.contracts" placeholder="请输入联系人" maxlength="10" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="mobile">
                <el-input v-model="ruleForm.mobile" placeholder="请输入联系电话" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="11" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="官方网址" prop="officialWebsite">
                <el-input type="textarea" v-model="ruleForm.officialWebsite" placeholder="请输入官方网址" maxlength="500" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="在线咨询链接" prop="onlineUrl">
                <el-input type="textarea" v-model="ruleForm.onlineUrl" placeholder="请输入在线咨询链接" maxlength="500" show-word-limit></el-input>
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
  props: {
    contactsData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      ruleForm: {
        address: '',
        contracts: '',
        mobile: '',
        officialWebsite: '',
        onlineUrl: ''
      },
      rules: {
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
          { min: 10, max: 30, message: '长度在 10 到 30 个字符', trigger: 'blur' }
        ],
        contracts: [
          { required: true, message: '请输入联系人', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的联系电话', trigger: 'blur' }
        ],
        officialWebsite: [
          { required: true, message: '请输入官方网址', trigger: 'blur' },
          { min: 5, max: 500, message: '长度在 5 到 500 个字符', trigger: 'blur' }
        ],
        onlineUrl: [
          { required: true, message: '请输入在线咨询链接', trigger: 'blur' },
          { min: 5, max: 500, message: '长度在 5 到 500 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.ruleForm = Object.assign({}, this.contactsData)
  },
  methods: {
    // 提交按钮
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const _this = this
          const param = {
            address: this.ruleForm.address,
            contracts: this.ruleForm.contracts,
            mobile: this.ruleForm.mobile,
            officialWebsite: this.ruleForm.officialWebsite,
            onlineUrl: decodeURI(this.ruleForm.onlineUrl),
            id: 1
          }
          api.contractUpdate(param, _this).then(res => {
            this.$message.success('保存成功')
            this.$emit('updateContactsData', this.ruleForm)
          }).catch(err => {
            console.log('test api post err:', err)
            this.msg = 'Post请求后台接口错误'
            this.$message.error(err)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-container {
  .contacts-content {
    overflow-y: auto;
    height: calc(100vh - 200px);
  }
}
.contacts-form {
  height: auto;
  overflow: unset;
  /deep/.el-input__inner{
    border: none;
    border-bottom: 1px solid #DADEE7;
  }
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
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  margin: 0;
  .form_btn_save {
    width: 150px;
    height: 45px;
  }
}
</style>
