import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Quickwork from '@do1/quickwork'
import QuickworkBusiness from 'quickwork-business'

Vue.use(Quickwork)
Vue.use(QuickworkBusiness)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
