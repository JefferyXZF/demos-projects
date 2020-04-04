<template>
  <div class="left-menu">
    <el-scrollbar>
      <el-menu :default-active="activeIndex">
        <el-menu-item-group
          v-for="item in menuList"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">{{item.title}}</template>
          <a
            v-for="child in item.children"
            :key="child.path"
            :href="child.path"
            @click.prevent="switchPage(child.path)"
          >
            <el-menu-item :index="child.path">
              <i :class="'icon font_family iconfont ' + child.icon"></i>
              <span>{{child.title}}</span>
            </el-menu-item>
          </a>
        </el-menu-item-group>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'left-menu',
  props: {
    menuList: { type: Array, default: _ => [] }
  },
  data () {
    return {
      activeIndex: '',
      searchKey: ''
    }
  },
  watch: {
    '$route.path': {
      handler (val) {
        this.activeIndex = val
      }
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  },
  methods: {
    switchPage (val) {
      this.$router.push({ path: val })
      this.activeIndex = val
    }
  }
}
</script>
<style lang="scss" scoped>
  $--color-primary: #0067ED;
  .left-menu {
    width: 200px;
    height: 100%;
    .el-scrollbar {
      height: 100%;
      border-right: 0.5px solid #e6e6e6;
      /deep/.el-scrollbar__wrap{overflow: auto}
      .el-scrollbar__view {
        height: 100%;
      }
    }
    .el-menu {
      height: 100%;
      padding-top: 5px;
      border: 0;
      background-color: transparent;
      .el-menu-item, .el-submenu__title {
        height: 50px;
        line-height: 50px;
      }
      /deep/.el-menu-item-group__title {
        text-align: left;
        font-size: 14px;
        color: #66686C;
        margin-top: 10px;
      }
      .el-menu-item {
        color: #1E2330;
        font-weight: bold;
        font-size: 15px;
        i {
          color: #1E2330;
          margin-right: 10px;
          font-size: 18px;
        }
        &.is-active {
          color: $--color-primary;
          i {
            color: $--color-primary;
          }
        }
        &:hover, &:focus {
          background-color: transparent;
          color: $--color-primary;
          i {
            color: $--color-primary;
          }
        }
      }
    }
  }
</style>
