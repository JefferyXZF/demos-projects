
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

export const TextArea = () => {
  return {
    type: 'CheckBox',
    label: '多行文本'
  }
}

// 一行两列布局
export const TwoColumnLayout = () => {
  return {
    type: 'TwoColumnLayout',
    label: '一行两列',
    columnSum: 2,
    children: [column(), column()]
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
