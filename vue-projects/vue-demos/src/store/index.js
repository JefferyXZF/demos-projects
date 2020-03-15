import Vue from 'vue'
import Vuex from 'vuex'
import dragDemo from './module/dragDemo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragDemo
  }
})
