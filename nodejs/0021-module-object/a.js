const EventEmitter = require('events');

module.exports = new EventEmitter();

setTimeout(() => {
    module.exports.emit('ready');
}, 100);