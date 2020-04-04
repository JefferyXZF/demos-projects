import axios from 'axios'
import vm from '@/main.js'
const config = require('../config')

// post请求封装
export function commonPost (url, params = '', _this = null, header = 'application/x-www-form-urlencoded;charset=UTF-8') {
  return new Promise((resolve, reject) => {
    axios.post(config.baseUrl + url, params, {
      headers: {
        'Content-type': header,
        'X-Auth0-Token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      }
    }).then(res => {
      const resp = res.data
      if (resp.errcode === 10000) {
        vm.$alert('登录凭证失效,请重新登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            vm.$router.push({ path: '/login' })
          }
        })
        return
      }
      if (resp.errcode && resp.errcode != 0) {
        vm.$alert(resp.errmsg, '提示', {
          confirmButtonText: '确定'
        })
        return
      }
      if (resp.code == 0) {
        if (resp.data.errcode && resp.data.errcode != 0) {
          vm.$alert(resp.data.errmsg, '提示', {
            confirmButtonText: '确定'
          })
          reject(resp)
        } else {
          resolve(resp.data)
        }
      }
      //  else {
      //   reject(resp.errmsg)
      // }
    }).catch(err => {
      reject(err)
    })
  })
}

// get请求封装
export function commonGet (url, params = '') {
  return new Promise((resolve, reject) => {
    axios.get(config.baseUrl + url, {
      params: params,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Auth0-Token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      }
    }).then(res => {
      const resp = res.data
      if (resp.errcode === 10000) {
        vm.$alert('登录凭证失效,请重新登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            vm.$router.push({ path: '/login' })
          }
        })
        return
      }
      if (resp.errcode && resp.errcode != 0) {
        vm.$alert(resp.errmsg, '提示', {
          confirmButtonText: '确定'
        })
        return
      }
      if (resp.code == 0) {
        if (resp.data.errcode && resp.data.errcode != 0) {
          vm.$alert(resp.data.errmsg, '提示', {
            confirmButtonText: '确定'
          })
        } else {
          resolve(resp.data)
        }
      }

      // else {
      //   reject(resp.msg)
      // }
    }).catch(err => {
      reject(err)
    })
  })
}
