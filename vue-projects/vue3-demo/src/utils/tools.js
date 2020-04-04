import axios from 'axios'

const config = require('../config')
const env = process.env.NODE_ENV
const envInfo = config[env]

export function getLoginUrl () {
  const loginUrl = envInfo.loginUrl
  const redirectUrl = envInfo.redirectUrl
  return loginUrl.replace('[redirect_uri]', redirectUrl)
}

export function getCookie (name) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) {
    return unescape(arr[2])
  }
  return null
}

export function setCookie (name, value, expires, path, domain) {
  if (!expires) { // 默认1天有效期
    expires = 24 * 60 * 60
  }
  const exp = new Date()
  exp.setTime(exp.getTime() + expires * 1000)
  let cookieName = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
  if (domain) {
    cookieName += ';domain=' + domain
  }
  document.cookie = cookieName
}

export function timeFormat (time, format) {
  if (!(time instanceof Date)) time = new Date(time)
  const o = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    S: time.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

export function getQuery (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

function axiosGetParam (param) {
  const url = param.url
  delete param.url
  return {
    url: url,
    param: param.param,
    headers: {
      'Content-type': 'application/json',
      'X-Auth0-Token': localStorage.getItem('token')
    }
  }
}

export function axiosGet (param) {
  const options = axiosGetParam(param)
  options.url = envInfo.cgiUrl + options.url
  return new Promise((resolve, reject) => {
    axios.get(options.url, {
      params: options.param,
      headers: options.headers
    }).then(res => {
      const resp = res.data
      if (resp.code === 0) {
        resolve(resp.data)
      } else {
        reject(resp.msg)
      }
    }).catch(err => {
      if (err.response.code === 401) {
        location.href = getLoginUrl()
      }
      reject(err)
    })
  })
}

function axiosPostParam (param) {
  const url = param.url
  delete param.url
  return {
    url: url,
    param: param.param,
    headers: {
      'Content-type': 'application/json',
      'X-Auth0-Token': localStorage.getItem('token')
    }
  }
}

export function axiosPost (param) {
  const options = axiosPostParam(param)
  options.url = envInfo.cgiUrl + options.url
  return new Promise((resolve, reject) => {
    axios.post(options.url, options.param, {
      headers: options.headers
    }).then(res => {
      const resp = res.data
      if (resp.code === 0) {
        resolve(resp.data)
      } else {
        reject(resp.msg)
      }
    }).catch(err => {
      if (err.response.data.code === 401) {
        location.href = getLoginUrl()
      }
      reject(err)
    })
  })
}

export function login (cb) {
  const Token = getCookie('Token')
  const code = getQuery('code')
  if (!Token && !code) {
    location.href = getLoginUrl()
  } else if (code) {
    axiosPost({
      url: '/v1/account/login',
      Code: code
    }).then(res => {
      setCookie('Token', res.Token)
      location.href = envInfo.redirectUrl
    }).catch(err => {
      this.$message.error('登录态失败，错误信息：' + JSON.stringify(err))
      setTimeout(() => {
        location.href = getLoginUrl()
      }, 1500)
    })
  } else {
    cb()
  }
}
