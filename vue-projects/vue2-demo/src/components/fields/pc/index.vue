<template>
  <div>
    PC端字段
    <div
      v-for="(item, index) in fieldComponents"
      :key="index"
    >
      <component
        :is="item.type"
        :fieldIndex="index"
        :field="item"
        @change="updateField"
      ></component>
      <p
        class="validate-tips"
        v-show="!item.disabled && item.tips">
        {{ item.tips }}
      </p>
    </div>
  </div>
</template>

<script>
import fields from '@/assets/js/fields'
import TextField from './components/textField'
import TextArea from './components/areaField'
export default {
  name: 'DesktopField',
  components: {
    TextField,
    TextArea
  },
  data () {
    return {
      fields: fields.deskTop,
      fieldArr: [
        'TextField',
        'TextArea',
        // 'RadioButton',
        // 'CheckBox',
        // 'DropDown',
        // 'CascadeDropDown',
        // 'NumberField',
        // 'EmailField',
        // 'TelephoneField',
        // 'MobileField',
        // 'RatingField',
        // 'DateField',
        // 'TimeField',
        // 'DateTimeField',
        // 'GeoField',
        // 'ProvinceCityField',
        // 'CityField',
        // 'ImageField',
        // 'AccessoryField',
        // 'ChildField',
        // 'CRMCustomerField',
        // 'DataSource',
        // 'HandWrittenField',
        // 'WeChatScanField',
        // 'QRCodeField'
      ]
    }
  },
  computed: {
    fieldComponents () {
      return this.fields.map(item => {
        item.type = this.fieldArr.includes(item.type) ? item.type : 'TextField'
        return item
      })
    }
  },
  methods: {
    updateField (value, index) {
      this.fields[index].value = value
    }
  }
}
</script>

<style lang="less" scoped>
.validate-tips {
  color: red;
  font-size: 12px;
}
</style>
