<template>
  <div class="type-field">
    <div class="field-content">
      <draggable
        v-model="fieldType"
        :options="dragOptions"
        ghost-class="ghost"
        :clone="updateTypes"
        @start="dragStart"
        @end="dragEnd"
      >
      <transition-group>
        <field-type-item
          v-for="item in fieldType"
          :key="item.title"
          :item="item"
          :type="'commonTypes'"
          @selectFieldType="selectFieldType"
        />

      </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import { fieldType } from './../../assets/js/data/designerType.js'
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
import fieldTypeItem from './fieldTypeItem'
export default {
  name: 'FieldType',
  components: {
    draggable,
    fieldTypeItem
  },
  data () {
    return {
      fieldType
    }
  },
  computed: {
    ...mapState('dragDemo', [
      'dragType'
    ]),
    dragOptions () {
      return {
        group: {
          name: this.dragType
          // pull: 'clone',
          // put: 'false',
          // revertClone: true
        },
        // sort: false,
        ghostClass: 'sortable-ghost'
      }
    }
  },
  methods: {
    updateTypes () {

    },
    dragStart () {

    },
    dragEnd () {

    },
    selectFieldType () {

    }
  }
}
</script>

<style lang="less" scoped>
.type-field {
  display: flex;
  color: #777;
  .typeTitle {
    margin: 18px 0 12px 16px;
    text-align: left;
    color: #383838;
    font-size:14px;
  }
}
.field-content {
  width: 270px;
  padding: 0 8px 32px;
  box-sizing: border-box;
  background-color: #fff;
  border-right:1px solid #E5E5E5;
  overflow-x: hidden;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  border: none;
  color: #000;
}
</style>
