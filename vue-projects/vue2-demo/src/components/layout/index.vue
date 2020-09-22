<template>
  <div>
    <!-- 水平居中布局 -->
    <!-- text-align -->
    <div class="parent">
      <div class="child size">我是孩子</div>
    </div>

    <!-- margin + width -->
    <div class="margin-width item">margin + width水平居中</div>

    <!-- position + transform -->
    <div class="position-transform-parent">
      <div class="child">position + transform水平居中</div>
    </div>

    <!-- flex + justify-content -->
    <div class="flex-justify">
      <div class="child item">flex + justify-content 水平居中</div>
    </div>

    <!-- flex + justify-content -->
    <div class="flex-table">
      <div class="child item">flex-table水平居中</div>
    </div>

    <!-- flex + grid -->
    <div class="flex-grid">
      <div class="child item">flex-grid水平居中</div>
    </div>

    <!-- line-height -->
    <div class="line-height item">
      line-height
    </div>

    <!-- vertical-align -->
    <div class="vertical-align item">
      <!-- <img src="./../../assets/images/1.jpg" alt=""> -->
      <div class="child">
        vertical-align
      </div>
    </div>

    <!-- table vertical-align -->
    <div class="table-vertical-align item">
      <!-- <img src="./../../assets/images/1.jpg" alt=""> -->
      <div class="child">
        table-vertical-align
      </div>
    </div>

    <!-- 水平垂直居中 -->
    <!-- absolute  margin transform-->
    <div class="absolute-parent">
      <!-- <img src="./../../assets/images/1.jpg" alt=""> -->
      <div class="child">
        absolute  margin transform
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CenterLayout',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.parent {
    border: 1px solid red;
    width: 300px;
    height: 300px;
}

.child {
    background: green;
}
.child.size{
    width: 100px;
    height: 100px;
}

.item {
  height: 60px;
  margin-bottom: 20px;
  background: red;
}
.text-align-parent {
  text-align: center;
  .text-align {
    display: inline-block;
    width: 200px;
    background: red;
  }
}

.margin-width {
  display: block;
  width: 200px;
  margin: 100px auto 20px;
  background: red;
}

.position-transform-parent {
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

.flex-justify {
  display: flex;
  justify-content: center;
  .child {
    width: 200px;
  }
}

.flex-table {
  display: table;
  margin: 0 auto;
}

.flex-grid {
  display: grid;
  justify-content: center;
  .child {
    width: 200px;
  }
}

// 垂直居中
.line-height {
  line-height: 60px;
  height: 60px;
  background: red;
}

.vertical-align {
  &::after, .child {
    display: inline-block;
    vertical-align: middle;
  }
}

.vertical-align::after {
  content: '';
  height: 100%;
}

.table-vertical-align {
  display: table;
  .child {
    display: table-cell;
    vertical-align: middle;
  }
}

.absolute-parent {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  position: relative;
  .child {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    background: red;
    width: 100px;
    height: 100px;
  }
}
</style>
