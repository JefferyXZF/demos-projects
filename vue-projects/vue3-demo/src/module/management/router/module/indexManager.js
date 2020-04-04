// 路由配置

export default [
  {
    path: '/',
    component: () => import('@/components/desktop/layout/index'),
    redirect: '/indexManager',
    children: [
      {
        path: '/indexManager',
        name: 'indexManager',
        component: () => import('@/module/management/views/indexManager/index'),
        children: [
          {
            path: 'pageManager',
            name: 'pageManager',
            // component: () => import('@/module/management/views/indexManager/pageManager/index')
          }
        ]
      }
    ]
  }
]
