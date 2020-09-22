## 搜索组件

### 扩展

- 搜索框左边提供插槽
- 搜索框右边提供图标点击事件和插槽

### 自定义 API

#### 自定义属性 Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| showLeft | 显示左边下拉选择 | Boolean | — | false |
| showRight | 显示右边图标区域 | Boolean | — | false |
| selectData | 下拉选项 | Array | — | [] |
| selectValue | 下拉默认选中的值 | String | — | '' |
| right-icon | 右边自定义图标 | String | — |  |

#### 自定义事件 Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| handleSelect | 选中事件 |
| handleRight | 点击右边区域 |


#### 自定义插槽 slot

| name | 说明 |
| :--- | :--- |
| right | 右边插槽 |
| left | 左边插槽 |

### 公共组件 qw-search-bar API

#### SearchBar Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value / v-model | 绑定值 | String / Number | — | — |
| clearable | 是否显示清除按钮 | Boolean | — | false |
| placeholder | 原生属性，搜索框占位文本 | String | — | — |
| maxlength | 原生属性，最大输入长度 | Number | — | — |
| minlength | 原生属性，最小输入长度 | Number | — | — |
| autocomplete | 原生属性，自动补全 | String | on, off | off |
| name | 原生属性 | String | — | — |
| readonly | 原生属性，是否只读 | Boolean | — | false |
| autofocus | 原生属性，自动获取焦点 | Boolean | — | false |



#### SearchBar Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| blur | 在搜索框失去焦点时触发 | (event: Event) |
| focus | 在搜索框获得焦点时触发 | (event: Event) |
| change | 在搜索框值改变时触发 | (value: String &#124; Number) |


#### SearchBar Methods
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| focus | 使搜索框获取焦点 | — |
| blur | 使搜索框失去焦点 | — |
