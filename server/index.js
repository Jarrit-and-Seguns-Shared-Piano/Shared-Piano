const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('a user has connected')
    socket.on('disconnect', () => {
        console.log('user has disconnected')
    })
})

io.on('connection', (socket) => {
    socket.on('play sound', (body) => {
    console.log(body)
        io.emit('play sound', body)
    })
})

server.listen(8000, () => {
    console.log('server is listening on port 8000');
});