export function uuid () {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}
// 判断数据是否为空
export function isEmpty (obj) {
  var toString = Object.prototype.toString
  var isArray = function (obj) {
    return toString.call(obj) === '[object Array]'
  }
  var isString = function (obj) {
    return toString.call(obj) === '[object String]'
  }
  if (obj == null) return true
  if ((isArray(obj) || isString(obj))) return obj.length === 0
  if (typeof obj === 'object') {
    if (JSON.stringify(obj) === '{}') {
      return true
    }
  }
  if (obj === '') { return true }
  if (obj === undefined) { return true }
}
