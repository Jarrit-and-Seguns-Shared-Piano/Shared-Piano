const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('dotenv').config()
const PORT = process.env.PORT || 8000
const { addUser, removeUser, getUser, getUsersInRoom, getNames, getRooms} = require( './users.js')

const { addMessage, getMessagesInRoom } = require('./messages')
app.use( express.static(__dirname + '/../../build'))
io.on('connection', socket => {
    console.log('a user has connected')

    socket.on('join', ({name, room, color}) => {
        if(!getNames(name)){
            const { user } = addUser({id: socket.id, name, room, color})
            socket.join(user.room)
            io.to(user.room).emit('get users', {users: getUsersInRoom(user.room)})
        } else {
            const sameUser = getNames(name)
            sameUser.id = socket.id
            socket.join(sameUser.room)
            io.to(sameUser.room).emit('get users', {users: getUsersInRoom(sameUser.room)})
        }
    })

    socket.on('play sound', (body) => {
        console.log("here", body)
        const user = getUser(socket.id)
        socket.broadcast.to(user.room).emit('play sound', { body, user })
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

    socket.on('send message', message => {
        const user = getUser(socket.id)
        if(message){
            addMessage({message: message, id: user.id, name: user.name, room: user.room, color: user.color})
        }
        // console.log(getMessagesInRoom(user.room))
        io.to(user.room).emit('receive message', {messages: getMessagesInRoom(user.room)})
    })

    socket.on('disconnect', () => {
        const user = getUser(socket.id)
        if(user){
        removeUser(user.id)
        io.to(user.room).emit('get users', {room: user.room, users: getUsersInRoom(user.room)})
        console.log(`${user.name} has left ${user.room}`)
        }
        console.log('user has disconnected')
    })
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});