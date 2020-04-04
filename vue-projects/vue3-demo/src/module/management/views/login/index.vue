<template>
  <el-container class="main-content login">
    <el-header>
      <div class="top_menu">
        <router-link class="logo" to="/login">模板管理平台</router-link>
      </div>
    </el-header>
    <el-container class="container_router_view">
      <div class="login_index">
          <div class="hareForm index_box">
              <div class="login_title">模板管理平台</div>
              <el-form ref="ruleForm" :rules="rules" :model="ruleForm">
              <el-form-item class="phone_box" label="" prop="telphone">
                  <el-input v-model="ruleForm.telphone" placeholder="请输入手机号码" maxlength="11"  onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
                  <el-button class="getCode" type="text" @click="getCode()" :disabled="disabled">{{ codeText }}</el-button>
              </el-form-item>
              <el-form-item label="" prop="code">
                  <el-input v-model="ruleForm.code" placeholder="请输入验证码" maxlength="6"></el-input>
              </el-form-item>
              <el-form-item class="form_btn">
                  <el-button class="btn_login" :disabled="btnLoginDisabled" type="primary" @click="loginUser()">登录</el-button>
              </el-form-item>
              </el-form>
          </div>
      </div>
    </el-container>
  </el-container>
</template>

<script>
const api = require('@/api/index')
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        telphone: '',
        code: ''
      },
      rules: {
        telphone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入六位数的验证码', trigger: 'blur' }
        ]
      },
      countdown: 60,
      codeText: '获取验证码',
      timer: null,
      disabled: true,
      btnLoginDisabled: false
    }
  },
  methods: {
    getCode () { // 获取验证码
      const _this = this
      this.disabled = true
      _this.axiosGet({
        url: '/qhjz/login/captcha/' + _this.ruleForm.telphone
      }).then(res => {
        if (res.errcode === 1005) {
          _this.$message.error(res.errmsg)
          return
        }
        if (res.errcode === 1008) {
          _this.$message.error(res.errmsg)
          return
        }
        // 获取验证码60s倒计时
        if (_this.countdown == 60) {
          _this.timer = setInterval(() => {
            _this.countdown--
            _this.codeText = '重新发送(' + _this.countdown + ')'
            _this.disabled = true
            if (_this.countdown <= 0) {
              clearInterval(_this.timer)
              _this.disabled = false
              _this.codeText = '获取验证码'
              _this.countdown = 60
            }
          }, 1000)
        }
        _this.$message.success('发送成功')
      }).catch(err => {
        console.log('test api post err:', err)
        _this.msg = 'Get请求后台接口错误'
        _this.$message.error(err)
      })
    },
    loginUser () { // 登录
      const _this = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          _this.btnLoginDisabled = true
          const param = {
            phone: this.ruleForm.telphone,
            code: this.ruleForm.code
          }
          api.loginIn(param).then(res => {
            _this.btnLoginDisabled = false
            if (res.errcode === 1006) {
              this.$message.error(res.errmsg)
              return
            }
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userName', res.data.userName)
            this.$message({
              message: '登陆成功',
              type: 'success',
              onClose () {
                _this.$router.push({ path: '/indexManager' })
              }
            })
          }).catch(err => {
            _this.btnLoginDisabled = false
            if (err.code === 0 && err.data.errcode === 1006) {
              return
            }
            this.msg = 'Post请求后台接口错误'
            this.$message.error(err)
          })
        }
      })
    }
  },
  watch: {
    'ruleForm.telphone': {
      handler: function (newV, oldV) {
        if (newV.length === 11) {
          this.disabled = false
          const reg = /^1[3-9][0-9]{9}$/
          if (!reg.test(newV)) {
            this.$message.error('手机号码输入有误')
            this.disabled = true
          }
        } else {
          this.disabled = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
.login{
  width: 100%;
  height: 100vh;
}
.top_menu {
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #1e2431;
  color: #FFFFFF;
  .logo {
    display: flex;
    align-items: center;
    font-family: tenFont;
    font-size: 18px;
    margin-top: -2px;
    color: #FFFFFF;
  }
}
.container_router_view {
  width: 100%;
  height: 100%;
}
.login_index {
  background: url('./../../../../assets/images/banner.jpg') no-repeat 0 -30px;
  background-size: auto 100%;
  width: 100%;
  height: 100%;
}
.hareForm .el-form-item {
  margin-bottom: 30px;
}
.hareForm /deep/ .el-form-item__content{
  margin-left: 0 !important;
}
.hareForm /deep/ .el-input{
  width: 100%;
}
.index_box{
  width: 420px;
  position: absolute;
  right: 300px;
  top: 46%;
  transform: translateY(-50%);
  padding: 0 55px;
  border-radius: 16px;
  box-shadow: 0 0 30px 0 #d2e1ee;
  background-color: #ffffff;
  .login_title{
    margin: 65px 0 40px;
    font-size: 26px;
    color: #1E2330;
    font-family: tenFont,Microsoft YaHei,SimSun,sans-serif;
  }
  .phone_box{
    position: relative;
    .el-input{
      /deep/ .el-input__inner{
         padding-right: 100px;
      }
    }
    .getCode{
      position: absolute;
      right: 10px;
    }
  }
  /deep/ .el-button--primary{
    width: 100%;
  }
  .form_btn {
    padding-bottom: 35px;
    .btn_login {
      width: 100%;
    }
  }
}
.hareForm /deep/ .el-form-item__error{
  text-align: left;
}
</style>
