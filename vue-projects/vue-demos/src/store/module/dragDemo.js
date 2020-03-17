
const initState = () => ({
  dragType: '',
  richContent: 'sss'
})

const state = initState()

const mutations = {
  setDragState (state, obj) {
    if (!obj || Object.prototype.toString.call(obj) !== 'object Object') {
      return
    }
    Object.entries(obj).forEach(item => {
      state[item[0]] = item[1]
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
