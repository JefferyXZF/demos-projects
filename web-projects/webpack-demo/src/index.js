import './index.scss'

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

let person = new Person("张ddd三");
console.log(person.getName());
console.log('aasd')
let inner = document.createElement('div')
inner.innerHTML = 'ddd'
document.body.appendChild(inner)
