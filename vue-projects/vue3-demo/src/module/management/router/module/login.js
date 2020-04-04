// 路由配置

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/module/management/views/login/index')
  }
]
