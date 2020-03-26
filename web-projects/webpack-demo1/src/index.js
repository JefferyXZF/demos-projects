import printMe from './print'

import gif from './assets/images/img.gif'
import './index.css'


function component () {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  btn.innerHTML = 'Click Me and print'
  btn.addEventListener('click', printMe)
  var img = new Image()
  img.src = gif
  element.innerHTML = 'hello, webpack'
  element.classList = 'red-color'
  element.appendChild(img)
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())