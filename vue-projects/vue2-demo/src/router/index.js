import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import fields from '@/components/fields'
import highcharts from '@/components/highcharts'
import pcRoutes from './pc/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/fields',
      name: 'fields',
      component: fields
    },
    {
      path: '/highcharts',
      name: 'highcharts',
      component: highcharts
    },
    // pc 端路由
    ...pcRoutes
  ]
})
