<template>
  <div class="field-type-container">
    <div class="field-type-list">
      <field-type />
    </div>
    <div class="field-content">

    </div>
  </div>
</template>

<script>
import fieldType from './../../components/fieldType'

export default {
  name: 'DragPage',
  components: {
    fieldType
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.field-type-container {
  display: flex;
  .field-content {
    flex: 1
  }
}
</style>
