<template>
  <div id="app">
    <!-- <search-bar></search-bar> -->
    <router-view/>
  </div>
</template>

<script>
import searchBar from '@/mobile/components/search'
export default {
  name: 'App',
  components: {
    searchBar
  }
}
</script>

<style>
#app {

}
</style>
