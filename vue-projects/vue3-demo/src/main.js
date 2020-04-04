import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/css/common.scss'

// import manageRouter from '@/module/management/router/index.js'

// 全局注册tools方法
import * as funcs from './utils/tools'

Vue.config.productionTip = false
Vue.use(ElementUI)

for (const name in funcs) {
  Vue.prototype[name] = funcs[name]
}
window._vue_ = Vue
// 模块热更新
// if (module && module.hot) {
//   module.hot.accept()
// }
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
