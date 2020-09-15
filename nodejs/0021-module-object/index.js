const a = require('./a');
const exportA = require('./export-a');

a.on('ready', () => {
    console.log('ready :>> ', 'a');
});

console.log('exportA :>> ', exportA.a);

