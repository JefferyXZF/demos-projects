import html from './test.md'
import './main.css'

import('./lazy').then(res => {
  console.log(res, '加载成功')
})
console.log(html)