# 水平、垂直居中布局大全

## 水平居中布局

- text-align: center
- margin + width
- position + transform
- flex + justify-content
- table
- grid

### text-align

父元素是块级元素，子元素是行内或行内块级元素

```less
.parent {
  text-align: center;
  .child {
    display: inline-block;
    width: 200px;
    height: 60px;
    background: red;
  }
}
```
**优点**：兼容性好，简单

**缺点**：设置某个元素居中要多加一个额外的父标签，子元素内的字体对齐方式由于继承也会居中，如果向左对齐要添加 `text-align: center`

**margin + width**

元素是块级元素，设置宽度，margin 左右对齐

```css
.parent {
  width: 200px;
  margin: 0 auto;
  background: red;
}
```

**常用场景**：具有版心左右留白居中的页面

**优点**：兼容性好，简单

**缺点**：要给出元素的宽度

**拓展**

如果子元素是浮动元素，若想让子元素居中，给父元素宽度 `width` 设置为 `fit-content` , `margin` 设置为 `0 auto`

```less
.parent {
  width: fit-content;
  margin: 0 auto;
  overflow: hidden; // BFC 清除浮动
  .child {
    float: left;
    height: 60px;
    background: red;
  }
}

```

缺点：`fit-content` 是 CSS3 新增加的属性，只支持Chrome 和 Firefox浏览器

#### position + transform / margin

父元素相对定位，子元素绝对定位

```less
.parent {
  position: relative;
  height: 60px;
  .child {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: red;
  }
}

// 方式二
.child {
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -100px;
  background: red;
}

```

**优点**

简单，容易理解

**缺点**

- transform IE8 浏览器不支持
- absolute 子元素脱离标准文档流，父元素高度为 0 ，如果不想影响父元素后面兄弟元素布局，要给父元素添加高度

#### flex + justify-content

使用 flex 伸缩布局，子元素宽度默认为 `auto`，由内容撑开

```less
.flex-justify {
  display: flex;
  justify-content: center;
  .child {
    width: 200px;
    background: red;
  }
}
```

**优点**：简单，写法灵活

**缺点**：不兼容 IE9（包括IE9) 之前的版本

#### display - table 水平居中

`display: table` 使用 `CSS` 属性实现 `table` 表格布局

- `display: table` -> table 块级元素
- `display: inline-table` -> table 内联元素
- `display: table-row` -> tr
- `display: table-cell` -> td、th
- `display: table-header-group` -> thead
- `display: table-row-group` -> tbody
- `display: table-footer-group` -> tfoot
- `display: table-column` -> col
- `display: table-column-group` -> colgroup
- `display: table-caption` -> caption

```less
.parent {
  display: table;
  margin: 0 auto;
}
```

**常用场景**：表格布局

**优点**：兼容性好，兼容到 IE8，可以和 `flex` 配合使用; CSS 的`table`属性布局更灵活，可以满足复杂的网页设计

**缺点**：不够语义化化，对搜索引擎不够友好，在不同浏览器呈现不一样

#### grid 水平居中

```less
// 实现方式1
.parent {
  display: grid;
  justify-content: center;
  .child {
    width: 200px;
    background: red;
  }
}
// 实现方式2
.parent {
  display: grid;
  .child {
    justify-self: center;
    width: 200px;
    background: red;
  }
}
```

**优点**：`grid` 是二维网格布局，作为布局很强大

**缺点**：`grid` 兼容性不是很好，不兼容 IE9(包括IE9)、QQ浏览器、百度浏览器和低版本的浏览器

### 垂直居中布局

- line-height
- vertical-align
- table + vertical-align
- absolute + translateY
- flex + align-item
- grid

#### height + line-height

若元素是单行文本, 可设置 line-height 等于父元素高度

```less
.line-height {
  line-height: 60px;
  height: 60px;
  background: red;
}
```

**优点**：兼容性好，简单

**缺点**：只能设置单行文本，固定要高度

#### vertical-align

元素高度固定，若子元素是行内块级元素, 基本思想是使用display: inline-block, vertical-align: middle和一个伪元素让内容块处于容器中央

```less
.parent {
  height: 60px;
  background: red;
}
.parent::after, .child {
    display: inline-block;
    vertical-align: middle;
  }
.parent::after {
  content: '';
  height: 100%;
}
```

**优点**

写法很流行，能适应 IE7

**缺点**

不好理解

#### table + vertical-align

vertical-align只有在父层为 td 或者 th 时, 才会生效, 对于其他块级元素, 例如 div、p 等, 默认情况是不支持的. 为了使用vertical-align, 我们需要设置父元素display:table, 子元素 display:table-cell;vertical-align:middle;

```less
.parent {
  display: table;
  .child {
    display: table-cell;
    vertical-align: middle;
  }
}
```

**优点**

元素高度可以动态改变, 不需再CSS中定义, 如果父元素没有足够空间时, 该元素内容也不会被截断.

**缺点**

IE6~7, 甚至IE8 beta中无效.

#### absolute + translateY / margin

父元素相对定位，子元素绝对定位，原理和水平居中一样，只是水平外边距改为了垂直外边距

```less
.parent {
  position: relative;
  height: 200px;
  .child {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    transform: translateY(-50%);
    background: red;
  }
}

// 方式二
.child {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
  background: red;
}

```

#### flex + align-item

```less
.flex-justify {
  display: flex;
  align-items: center;
  .child {
    width: 200px;
    background: red;
  }
}
```

**优点**：简单，写法灵活

**缺点**：不兼容 IE9（包括IE9) 之前的版本

#### grid

```less
// 实现方式1
.parent {
  display: grid;
  height: 200px; // 新增
  align-content: center; // 新增
  .child {
    width: 200px;
    background: red;
  }
}
// 实现方式2
.parent {
  display: grid;
  height: 200px; // 新增
  .child {
    align-self: center; // 新增
    width: 200px;
    background: red;
  }
}
```

### 水平垂直居中布局

- text-align + line-height
- absolute + translate(x, y)
- flex + justify-content + align-item
- grid

### text-align + line-height

常用于文本居中

```css
.parent {
  width: 200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
```

### absolute + 子元素宽高固定

- absolute + margin
- absolute + calc

```less
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  .child {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: red;
  }
}

// 实现方式二
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  .child {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto; // 新增
    background: red;
  }
}

// 实现方式三
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  .child {
    position: absolute;
    width: 100px;
    height: 100px;
    top: calc(50% - 50px); // 新增
    left: calc(50% - 50px); // 新增
    background: red;
  }
}
```

**优点**

容易理解

**缺点**

- 需要知道子元素宽高
- 依赖 css3 的 `calc` 函数，要考虑兼容性


### absolute + 子元素宽高不固定


水平垂直居中是由上面的水平和垂直居中结合起来使用

```less
.parent {
  position: relative;
  height: 200px;
  background: yellow;
  .child {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
  }
}

// 方式二
.child {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  background: red;
}

```

### table 水平垂直居中



### flex + justify-content + align-item

```css

```

### grid


### 两列布局

- float + margin/padding
- absolute + margin/padding
- flex
- grid
- table
- column



### 三列布局

- float + margin/padding
- absolute + margin/padding
- flex
- grid
- table
- column

### 圣杯布局



### 引用链接


