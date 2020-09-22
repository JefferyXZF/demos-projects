/* 字段设置数据 */

import { uuid } from '../utils'
const getId = () => {
  return 'fo' + uuid().replace(/-/g, '')
}
// 普通选项
export const choices = () => {
  return {
    'type': 'Choice',
    'selected': false,
    'value': '选项',
    'sub_choices': [],
    '_id': getId()
  }
}

const fields = [
  {
    'type': 'TextField', // 渲染组件
    'keyword': 'TextField', // 后台的字段
    'value': '', // 值
    'label': '单行文字',
    'required': false,
    'readOnly': false,
    'disabled': false,
    'minLength': '',
    'maxLength': '',
    'show': true,
    'notes': '请输入',
    'help': '单行文字不能为空', // 校验提示
    'predefined_value': '', // 默认值
    '_id': getId()
  },
  {
    'type': 'TextArea',
    'keyword': 'TextArea',
    'label': '多行文字',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'notes': '请输入',
    'help': '多行文字不能为空', // 校验提示
    'minLength': '',
    'maxLength': '',
    'predefined_value': '', // 默认值
    '_id': getId()
  },
  {
    'type': 'RadioButton',
    'keyword': 'RadioButton',
    'label': '单项选择',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '单项选择不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId(),
    'choices': [choices(), choices(), choices()],
    'line_row': 1 // 布局，一行两列、一行三列
  },
  {
    'type': 'CheckBox',
    'keyword': 'CheckBox',
    'label': '多项选择',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '多项选择不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId(),
    'choices': [choices(), choices(), choices()],
    'line_row': 1
  },
  {
    'type': 'DropDown',
    'keyword': 'DropDown',
    'label': '下拉框',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '下拉框不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId(),
    'choices': [choices(), choices(), choices()],
    'selectedChoice': '选项'
  },
  {
    'type': 'CascadeDropDown',
    'keyword': 'CascadeDropDown',
    'label': '两级下拉框',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '两级下拉框不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId(),
    'choices': [
      {
        'value': '选项1',
        'sub_choices': [
          {
            'value': '二级选项1'
          },
          {
            'value': '二级选项2'
          }
        ],
        'type': 'Choice',
        'selected': false,
        '_id': getId()
      },
      {
        'value': '选项2',
        'sub_choices': [
          {
            'value': '二级选项1'
          },
          {
            'value': '二级选项2'
          }
        ],
        'type': 'Choice',
        'selected': false,
        '_id': getId()
      }
    ]
  },
  {
    'type': 'NumberField',
    'keyword': 'NumberField',
    'label': '数字',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'min': '',
    'max': '',
    'help': '数字不能为空',
    'accurate_num': 0, // 保留多少个小数位
    'transformToCapital': false, // 转化为大写
    'notes': '请输入',
    'predefined_value': '',
    '_id': getId()
  },
  {
    'type': 'EmailField',
    'keyword': 'EmailField',
    'label': '邮箱',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '邮箱不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  },
  {
    'type': 'TelephoneField',
    'keyword': 'TelephoneField',
    'label': '电话',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '电话不能为空',
    'predefined_value': '',
    'notes': '分隔请用-或空格，国际电话请加+',
    '_id': getId()
  },
  {
    'type': 'MobileField',
    'keyword': 'MobileField',
    'label': '手机',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '手机不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  },
  {
    'type': 'RatingField',
    'keyword': 'RatingField',
    'label': '评分',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '评分不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId(),
    'choices': [choices(), choices(), choices()]
  },
  {
    'type': 'DateField',
    'keyword': 'DateField',
    'label': '日期',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '日期不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'TimeField',
    'keyword': 'TimeField',
    'label': '时间',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '时间不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'DateTimeField',
    'keyword': 'DateTimeField',
    'label': '日期时间',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '日期时间不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'GeoField',
    'keyword': 'GeoField',
    'label': '地理位置',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '地理位置不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'ProvinceCityField',
    'keyword': 'ProvinceCityField',
    'label': '省市区',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '省市区不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'CityField',
    'keyword': 'CityField',
    'label': '城市',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '城市不能为空',
    'predefined_value': '',
    'notes': '请选择',
    '_id': getId()
  },
  {
    'type': 'ImageField',
    'keyword': 'ImageField',
    'label': '图片',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '图片不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId()
  },
  {
    'type': 'AccessoryField',
    'keyword': 'AccessoryField',
    'label': '附件',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '附件不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId()
  },
  {
    'type': 'ChildField',
    'keyword': 'ChildField',
    'label': '子表单',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '子表单不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  },
  {
    'type': 'CRMCustomerField', // 多选弹窗
    'keyword': 'CRMCustomerField',
    'label': '费控关联',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '费控关联不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId()
  },
  {
    'type': 'DataSource', // 单选弹窗
    'keyword': 'DataSource',
    'label': '数据源',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '数据源不能为空',
    'predefined_value': '',
    'notes': '',
    '_id': getId()
  },
  {
    'type': 'HandWrittenField',
    'keyword': 'HandWrittenField',
    'label': '手写签名',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '数据源不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  },
  {
    'type': 'WeChatScanField',
    'keyword': 'WeChatScanField',
    'label': '微信扫码',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '微信扫码不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  },
  {
    'type': 'QRCodeField',
    'keyword': 'QRCodeField',
    'label': '二维码',
    'value': '', // 值
    'required': false,
    'readOnly': false,
    'disabled': false,
    'show': true,
    'help': '二维码不能为空',
    'predefined_value': '',
    'notes': '请输入',
    '_id': getId()
  }
]

export default fields
