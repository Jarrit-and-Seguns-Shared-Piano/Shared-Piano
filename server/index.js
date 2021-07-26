const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000

const { addUser, removeUser, getUser, getUsersInRoom} = require( './users.js')

io.on('connection', socket => {
    console.log('a user has connected')

    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({id:socket.id, name, room})
        if(error) return callback(error)
        socket.join(user.room)
    })
  
    socket.on('play sound', (body) => {
        const user = getUser(socket.id)
        console.log(user)
        socket.broadcast.to(user.room).emit('play sound', body)
    })

    socket.on('disconnect', () => {
        console.log('user has disconnected')
    })
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});