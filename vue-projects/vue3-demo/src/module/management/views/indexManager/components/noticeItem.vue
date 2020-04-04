<template>
  <div class="notice-item">
    <el-button plain class="select-btn" @click="open">关联文章</el-button>
    <div class="notice-select">
      <el-input v-model="item.articleTitle" placeholder="请选择关联文章" class="contact-input" readonly></el-input>
      <i class="el-icon-circle-plus-outline" v-if="showAdd" @click="add"></i>
      <i class="el-icon-delete" v-if="showDel" @click="del"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'noticeItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    showAdd: {
      // 是否显示新增按钮
      type: Boolean,
      default: false
    },
    idx: {
      // 索引
      type: Number,
      required: true
    },
    showDel: {
      // 是否显示删除
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    del () {
      // 删除
      this.$emit('delete', this.idx)
    },
    add () {
      // 新增
      this.$emit('add')
    },
    open () {
      // 打开关联文章
      this.$emit('open', this.idx, this.type)
    }
  }
}
</script>
<style lang="scss" scoped>
.notice-item {
  display: flex;
  align-items: flex-end;
  width: 400px;
  margin-bottom: 35px;
  line-height: 90px;
  .notice-select {
    display: flex;
    width: 280px;
    justify-content: space-between;
    align-items: flex-end;
  }
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
  .contact-input {
    width: 213px;
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
