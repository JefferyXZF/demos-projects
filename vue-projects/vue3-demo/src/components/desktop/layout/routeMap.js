// 对应模块左侧菜单配置
const leftMenuMap = [
  {
    title: '首页管理',
    path: '/indexManager',
    icon: 'icon-guanli',
    children: [
      {
        title: '页面管理',
        path: '/indexManager/pageManager',
        icon: 'icon-yemianguanli'
      },
      {
        title: '文章管理',
        path: '/indexManager/articleList',
        icon: 'icon-wenzhangguanli'
      }
    ]
  }
]

export default {
  indexManager: leftMenuMap
}
