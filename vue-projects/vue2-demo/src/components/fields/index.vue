<template>
  <div>
    字段
    <desktop-fields></desktop-fields>
  </div>
</template>

<script>
import fields from '@/assets/js/fields'

import DesktopFields from './pc/index'
export default {
  name: 'FieldContainer',
  components: {
    DesktopFields
  },
  
  data () {
    return {
      fields
    }
  }
}
</script>

<style>

</style>
