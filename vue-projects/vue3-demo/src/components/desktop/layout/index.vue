<template>
  <div>
    <el-container class="container">
      <el-header>
        <top-menu :menuList="topMenuList"></top-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left-menu :menuList="leftMenuList"></left-menu>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftMenu from './leftMenu'
import topMenu from './topMenu'
import leftMenuMap from './routeMap.js'
export default {
  name: 'Layout',
  components: {
    leftMenu,
    topMenu
  },
  data () {
    return {
      topMenuList: [
        { title: '首页管理', path: '/indexManager' },
        { title: '咨询管理', path: '/consult' },
        { title: '直播管理', path: '/live' },
        { title: '账户管理', path: '/account' }
      ],
      leftMenuList: []
    }
  },
  watch: {
    '$route.path': {
      handler (val) {
        this.loadLeftMenu(val)
      },
      immediate: true
    }
  },
  methods: {
    loadLeftMenu (val) {
      const leftMenuKey = val.split('/')[1]
      this.leftMenuList = leftMenuMap[leftMenuKey] || []
    }
  }

}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
