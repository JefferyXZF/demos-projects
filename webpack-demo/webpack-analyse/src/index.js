console.log('hello the world')
const EventEemitter  = require('events').EventEmitter

const event = new EventEemitter()

event.on('event_name', args => {
  console.log('event_name', args)
})

setTimeout(() => {
  event.emit('event_name', 'hello the world')
})