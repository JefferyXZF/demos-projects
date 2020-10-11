

function init () {
  console.log('start ...')
  let btn = document.createElement('button')
  let text = document.createTextNode('点击我')
  btn.appendChild(text)
  btn.addEventListener('click', clickLoad)
  document.body.appendChild(btn)
}

function clickLoad() {
  console.log('hello the world')
  import(/*webpackChunkName: 'lazy-name'*/'./main.js').then(result => {
    console.log(result)
  })
}

init()