
// 列布局项
export const column = () => {
  return {
    type: 'column',
    label: '',
    children: []
  }
}

export const TextField = () => {
  return {
    type: 'TextField',
    label: '单行文字'
  }
}

export const CheckBox = () => {
  return {
    type: 'CheckBox',
    label: '多行文本'
  }
}

export const DropDown = () => {
  return {
    type: 'DropDown',
    label: '下拉框'
  }
}

export const NumberField = () => {
  return {
    type: 'NumberField',
    label: '数字'
  }
}

export const EmailField = () => {
  return {
    type: 'EmailField',
    label: '邮箱'
  }
}

export const TelephoneField = () => {
  return {
    type: 'TelephoneField',
    label: '电话'
  }
}

export const MobileField = () => {
  return {
    type: 'MobileField',
    label: '手机'
  }
}

export const TextArea = () => {
  return {
    type: 'TextArea',
    label: '多行文字'
  }
}

export const DateField = () => {
  return {
    type: 'DateField',
    label: '日期'
  }
}

export const TimeField = () => {
  return {
    type: 'TimeField',
    label: '时间'
  }
}

export const DateTimeField = () => {
  return {
    type: 'DateTimeField',
    label: '日期时间'
  }
}

// 一行两列布局
export const TwoColumnLayout = () => {
  return {
    type: 'TwoColumnLayout',
    label: '一行两列',
    columnSum: 2,
    children: [column(), column()],
  }
}
// 一行三列布局
export const ThreeColumnLayout = () => {
  return {
    type: 'ThreeColumnLayout',
    label: '一行三列',
    columnSum: 3,
    children: [column(), column(), column()]
  }
}
