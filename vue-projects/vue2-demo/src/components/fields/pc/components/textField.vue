<template>
  <div class="field-content">
    <p>{{ field.label }}</p>
    <qw-input
      :value="field.value"
      :placeholder="field.notes"
      clearable
      maxlength="20"
      :disabled="disabled"
      show-word-limit
      suffix-icon="qw-icon-datepicker"
      prefix-icon="qw-icon-search"
      @input="setValue"
      @blur="validate"
    >
      <template #prepend>
        我是前缀内容 http://
      </template>
      <template #append>
        我是后缀内容 .com
      </template>
    </qw-input>
    <!-- <div
      v-else
      class="text-field-read read-only"
    >
      <p
        class="text-field-p"
        v-html="filterTextContent(field.value)"
      />
    </div> -->
  </div>
</template>

<script>
import { textMixin } from '../../mixin/textMixin.js'

export default {
  name: 'TextField',
  mixins: [textMixin]
}
</script>

<style lang="less" scoped>
// .field-content .text-field-read {
//   position: relative;
//   box-sizing: border-box;
//   min-height: 32px;
//   font-size: 14px;
//   background: #fff;
//   border: 1px solid #e5e5e5;
//   border-radius: 4px;
//   padding: 4px 12px;
//   overflow: hidden;
// }
// .text-field-p {
//   overflow: hidden;
// }
// .field-content .read-only {
//   background: #fafafb;
//   border: none;
// }
</style>
