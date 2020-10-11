## ActivityIndicator 活动指示器

表明某个任务正在进行中。

### 基本用法

目前，活动指示器支持三种类型： `roller`、`spinner`、`carousel`，默认情况下是 `roller`类型。每个类型都支持不同的配置参数

::: demo

```html
<qw-activity-indicator></qw-activity-indicator>
<qw-activity-indicator type="spinner"></qw-activity-indicator>
<qw-activity-indicator type="carousel"></qw-activity-indicator>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | String | roller / spinner / carousel | roller |
| size | 等同于 font-size | Number | — | 30 |
| color | 颜色 | String | dark / light (spinner) | dark / #FF884D |
| width | 圆环宽度(仅对 roller 有效) | Number | — | — |
| borderColor | 边框颜色(仅对 roller 有效) | String | — | transparent |
