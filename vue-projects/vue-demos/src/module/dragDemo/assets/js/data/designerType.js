
const TextField = {
  title: '单行文字',
  icon: 'ic_b-commond_single1',
  tip: '适用于填写简短的文字，如“姓名”',
  _type: FieldMap.TextField
}
const TextArea = {
  title: '多行文字',
  icon: 'ic_b-commond_mtext',
  tip: '适用于填写大段的文字，如“留言”、“建议”',
  _type: FieldMap.TextArea
}
const CheckBox = () => {
  return {
    title: '多项选择',
    tip: '适用于在几个选项里选多个，如投票',
    icon: 'ic_b-commond_checkbo',
    openAddImage: 0,
    _type: 'CheckBox'
  }
}
const DropDown = {
  title: '下拉框',
  icon: 'ic_b-commond_dropdo',
  tip: '适用于非常多的选项选一个，如T恤尺寸',
  _type: FieldMap.DropDown
}
const NumberField = {
  title: '数字',
  icon: 'ic_b-commond_number',
  tip: '适用于填写数字，如年龄、订购数量',
  _type: FieldMap.NumberField
}
const EmailField = {
  title: '邮箱',
  icon: 'ic_b-commond_email',
  tip: '适用于填写电子邮箱',
  _type: FieldMap.EmailField
}
const MobileField = {
  title: '手机',
  icon: 'ic_b-commond_telepho',
  tip: '适用于填写中国大陆境内的手机号码',
  _type: FieldMap.MobileField
}
const TelephoneField = {
  title: '电话',
  icon: 'ic_b-commond_phone',
  tip: '适用于填写全球的电话、手机、QQ号等',
  _type: FieldMap.TelephoneField
}
const DateField = {
  title: '日期',
  tip: '适用于选择特定日期',
  icon: 'ic_b-commond_date',
  _type: FieldMap.DateField
}
const TimeField = {
  title: '时间',
  tip: '适用于填写具体时间，可精确到秒',
  icon: 'ic_b-commond_time',
  _type: FieldMap.TimeField
}
const DateTimeField = {
  title: '日期时间',
  icon: 'ic_b-commond_datean',
  tip: '适用于选择特定日期及时间',
  _type: FieldMap.DateTimeField
}
const TwoColumnLayout = {
  title: '一行两列',
  tip: '一行两列',
  icon: 'ic_b-commond_dateso',
  _type: FieldMap.TwoColumnLayout
}
const ThreeColumnLayout = {
  title: '一行三列',
  tip: '一行三列',
  icon: 'ic_b-commond_dateso',
  _type: FieldMap.ThreeColumnLayout
}
// 普通字段
export const commonTypes = [
  TextField,
  TextArea,
  RadioButton(),
  CheckBox(),
  DropDown,
  CascadeDropDown,
  RadioButton(true),
  CheckBox(true),
  NumberField,
  EmailField,
  MobileField,
  TelephoneField 
]
