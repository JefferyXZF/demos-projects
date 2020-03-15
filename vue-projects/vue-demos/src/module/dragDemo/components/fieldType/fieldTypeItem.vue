<template>
  <div
    class="typeItem"
    :data-type="type"
    :data-fieldType="item.type"
    @click="selectFieldType(item)"
  >
    <span class="typeText">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'FieldTypeItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectFieldType (item) {
      this.$emit('selectFieldType', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .typeItem {
    display: inline-block;
    width: 108px;
    height: 28px;
    line-height: 28px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    background-color: #F7F7F7;
    border: 1px solid transparent;
    position:relative;
    margin-left: 12px;
    margin-bottom: 8px;
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      margin-left: 8px;
      vertical-align: middle;
      background-color: #878787;
    }
    &:hover {
      border: 1px dashed #FF884D;
      .qwui-tip{
        display:inline-block;
        position:absolute;
        left:80%;
        vertical-align: middle;
        visibility:visible;
        top:7px;
      }
      .typeText{
        color: #FF884D;
      }
      .icon {
        background-color: #FF884D;
      }
    }
    .typeText {
      line-height: 1;
      font-size: 12px;
      color: #383838;
    }
  }

</style>
