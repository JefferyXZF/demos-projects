<template>
  <div class="top-menu">
    <a class="logo" @click="goHome">模板管理平台</a>
    <div class="nav">
      <router-link v-for="item in menuList" :to="item.path" :key="item.path">
        {{item.title}}<i></i>
      </router-link>
    </div>
    <div class="right-msg">
      <div class="user">
        <span>{{ userName }}</span>
      </div>
      <i></i>
      <i class="el-icon-switch-button" title="退出" @click="loginOut"></i>
    </div>
  </div>
</template>
<script>
// import { timeFormat } from '@/utils/tools'
const api = require('@/api/index')
export default {
  name: 'TopMenu',
  props: {
    menuList: { type: Array, default: _ => [] }
  },
  data () {
    return {
      userName: ''
    }
  },
  mounted () {
  },
  methods: {
    goHome () {
      this.$router.push({ path: '/indexManager/pageManager' })
    },
    // 登出
    loginOut () {
      const _this = this
      this.$confirm('是否要退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        api.loginOut('', _this).then(res => {
          localStorage.removeItem('token')
          localStorage.removeItem('userName')
          this.$message({
            type: 'success',
            message: '退出成功!',
            onClose () {
              _this.$router.push({ path: '/login' })
            }
          })
        }).catch(err => {
          console.log('test api post err:', err)
          this.msg = 'Post请求后台接口错误'
          this.$message.error(err)
        })
      }).catch(() => {
      })
    }
  },
  created () {
    this.userName = window.localStorage.userName
  }
}
</script>
<style lang="scss" scoped>
  $--color-primary: #0067ED;
  .top-menu {
    background: #1E2431;
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: relative;
    color: #fff;
    .logo {
      display: flex;
      align-items: center;
      font-family: tenFont;
      font-size: 24px;
      margin-right: 40px;
      margin-top: -6px;
    }

    .nav {
      flex: 1;
      text-align: left;
      a {
        font-size: 18px;
        color: rgba(255, 255, 255, .5);
        margin: 0 23px;
        line-height: 60px;
        height: 60px;
        display: inline-block;
        &.router-link-active {
          border-bottom: 4px solid #126BE9;
          color: #fff;
        }
      }
    }

    .right-msg {
      display: flex;
      align-items: center;
      font-size: 14px;
      .user {
        display: flex;
        align-items: center;
      }
      i + i {
        margin-left: 40px;
        cursor: pointer;
      }
    }
  }
</style>
