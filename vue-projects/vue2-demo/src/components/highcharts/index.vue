<template>
  <div id="container">
    highChart
    <!-- 折线图 -->
    <lineChart></lineChart>
  </div>
</template>

<script>
import lineChart from './chartsType/lineChart'
export default {
  name: 'HighchartsContainer',
  components: {
    lineChart
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
