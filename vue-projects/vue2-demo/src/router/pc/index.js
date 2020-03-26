
const _import = (path, filename) => r => require.ensure([], () => r(require('@/module/dragDemo/views/' + path), filename))

const dragPage = _import('dragPage/index', 'dragPage')
// const _import = function (path, filename) {
//   return function (r) {
//     return require.ensure([], function () {
//       return r(require('@pc/views/' + path), filename)
//     })
//   }
// }

const routes = [
  {
    name: 'dragePage',
    path: '/dragePage',
    component: dragPage
  }
]

export default routes
