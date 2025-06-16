

const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=> {
    console.log(`First Data received user ${name} ${id}`);
})

customEmitter.on('response', () => {
    console.log('Second Data received');
    
})
customEmitter.emit('response', 'Tasneem', '25')