var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected !');

    socket.on('disconnect', () => {
        console.log('disconnection :>> ');
    });

    socket.on('chat:message', (message) => {
        console.log('message :>> ', message);
        // io.emit('chat:message', message);
        socket.broadcast.emit('chat:message', message);
    });

    socket.on('chat:typing', () => {
        socket.broadcast.emit('chat:typing');
    });

    socket.on('chat:endtyping', () => {
        socket.broadcast.emit('chat:endtyping');
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});