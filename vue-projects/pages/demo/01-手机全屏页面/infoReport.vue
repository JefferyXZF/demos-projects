<template>
  <div class="app-info">
    <h1 class="info-title">楼宇基本信息填报</h1>
    <div class="content">
      <div
        v-for="(item, index) in info"
        :key="index"
        class="content-item"
      >
        <div class="info-text">{{ item.title }}</div>
        <span class="qw-icon-arrow-right info-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoReport',
  data () {
    return {
      info: [
        {
          title: '立即填报',
        },
        {
          title: '查看我的填报记录',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-info {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 0 20px;
  background: #f7f7f7;
  height: 100%;

}
.info-title {
  padding: 30px 0 20px;
  font-size: 24px;
  color: #000;
}
.content {
  border-radius: 8px;
  overflow: hidden;
}
.content-item {
  display: flex;
  position: relative;
  line-height: 54px;
  padding: 0 20px;
  justify-content: space-between;
  font-size: 15px;
  background: #fff;
}
.info-text {
  width: 100%;
  border-bottom: 1px solid #ebebeb;
}
.info-icon {
  position: absolute;
  font-size: 20px;
  line-height: 54px;
  color: #c5c5c5;
  right: 20px;
}
.content-item:last-child .info-text {
  border: none;
}
</style>
