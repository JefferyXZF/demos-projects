// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import vueCropper from 'vue-cropper' // 截图插件

// element 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// quickwork 组件库
// import QuickworkMobile from '@do1/quickwork-mobile'
// import '@do1/quickwork-mobile/lib/theme/index.css'

import Quickwork from '@do1/quickwork'
import '@do1/quickwork/lib/theme/index.css'

import App from './App'
import router from './router'
import store from './store'
// import './assets/css/common.css'

Vue.config.productionTip = false
// Vue.use(QuickworkMobile)
Vue.use(Quickwork)
Vue.use(ElementUI)
Vue.use(vueCropper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
