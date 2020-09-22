<template>
  <div class="search-box">
    <!-- 左边下拉或扩展插槽 -->
    <slot name="left"></slot>
    <!-- 搜索框 -->
    <div class="search-content">
      <qw-search-bar
        v-model="keyWord"
        placeholder="请输入"
        @change="change"
        clearable
      ></qw-search-bar>
    </div>
    <!-- 右边下拉或扩展插槽 -->
    <slot name="right"></slot>
    <div
      class="icon-area"
      @click="handleRight"
    >
      <i :class="rightIcon"></i>
    </div>
  </div>
</template>

<script>
// import { Toast } from '@do1/quickwork-mobile'
export default {
  name: 'SearchBar',
  props: {
    showLeft: {
      type: Boolean,
      default: false
    },
    showRight: {
      type: Boolean,
      default: false
    },
    selectData: {
      type: Array,
      default: () => []
    },
    selectValue: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: 'qw-icon-fliter'
    }
  },
  data () {
    return {
      keyWord: ''
    }
  },
  created () {
    // Toast({
    //   content: '加载中',
    //   type: 'loading'
    // })
  },
  methods: {
    blur (ev) {
      console.log('blur', ev)
    },
    focus (ev) {
      console.log('focus', ev)
    },
    change (value) {
      console.log('change', value)
    },
    handleRight () {
      this.$emit('handleFilter')
    }
  }
}
</script>

<style lang="less">
.search-box {
  display: flex;
  .search-content {
    flex: 1;
  }
  .icon-area {
    line-height: 36px;
    padding: 0 6px;
    font-size: 20px;
  }
}
</style>
