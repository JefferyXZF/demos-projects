import { commonPost, commonGet } from './baseConfig'

// 上传文件
export function uploadFile (params, _this) {
  return commonPost('/qhjz/qhjzRotationPicture/uploadFile', params, 'multipart/form-data')
}

// 查询文章列表
export function getArticleList (params, _this) {
  return commonGet('/qhjz/qhjzArticles/list', params, _this)
}

// 一次性保存图标关联文章
export function saveList (params, _this) {
  return commonPost('/qhjz/qhjzIconInfo/saveList', params, _this, 'application/json')
}

// 查询图标关联文章列表
export function searchListAll (params, _this) {
  return commonGet('/qhjz/qhjzIconInfo/listAll', params, _this)
}

// 登录
export function loginIn (params, _this) {
  return commonPost('/qhjz/login/webLogin', params, 'application/json')
}

// 登出
export function loginOut (params, _this) {
  return commonPost('/qhjz/qhjzUser/webLoginOut', params, _this)
}

// 立即咨询
// 修改
export function contractUpdate (params, _this) {
  return commonPost('/qhjz/qhjzContract/update', params, _this, 'application/json')
}
// 查询信息
export function contractInfo (id, _this) {
  return commonGet('/qhjz/qhjzContract/info/' + id, '', _this)
}
