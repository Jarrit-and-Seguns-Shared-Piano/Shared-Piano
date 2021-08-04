const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000

const { addUser, removeUser, getUser, getUsersInRoom, getNames, getRooms, users } = require( './users.js')

io.on('connection', socket => {
    console.log('a user has connected')

    socket.on('join', ({name, room}) => {
        if(!getNames(name)){
            const { user } = addUser({id: socket.id, name, room})
            socket.join(user.room)
            io.to(user.room).emit('get users', {users: getUsersInRoom(user.room)})
        } else {
            const sameUser = getNames(name)
            sameUser.id = socket.id
            io.to(sameUser.room).emit('get users', {users: getUsersInRoom(sameUser.room)})
        }
    })

    socket.on('play sound', (body) => {
        const user = getUser(socket.id)
        socket.broadcast.to(user.room).emit('play sound', body)
    })

    socket.on('leave room', () => {
        const user = getUser(socket.id)
        removeUser(user.id)
        io.to(user.room).emit('get users', {room: user.room, users: getUsersInRoom(user.room)})
        console.log(`${user.name} has left ${user.room}`)
    })

    socket.on('check names', ({ joinName, room }) => {
        const foundName = getNames(joinName)
        const foundRoom = getRooms(room)
        socket.emit('check names', { foundName, foundRoom })
    })

    socket.on('disconnect', () => {
        console.log('user has disconnected')
    })
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});