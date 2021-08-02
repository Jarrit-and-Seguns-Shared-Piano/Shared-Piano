import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import socket from '../socket'

function Hash() {
    const [roomId, setRoom] = useState('')
    const location = useLocation()
    console.log("here", location.state)
    
    useEffect(() => {
        console.log(socket)
        if(location.state.room){
            setRoom(location.state.room)
            const room = location.state.room
            const name = location.state.name
            socket.emit('join', {name, room})
            socket.emit('get users')
            return () => {
                socket.emit('leave room')
            }
        } else {
        let room = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < 15; i++ ) {
            room += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }
        setRoom(room);
        console.log(location.state, room)
        const name = location.state.name
        socket.emit('join', {name, room})
        socket.emit('get users')
        return () => {
            socket.emit('leave room')
        }

    }
    }, [])

    return (
        <div>
            <p>{roomId}</p>
        </div>
    )
}

export default Hash