import { React, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import socket from '../socket'

function Hash() {
    const [roomId, setRoom] = useState('')
    const location = useLocation()
    console.log("here", socket)
    let history = useHistory()
    useEffect(() => {
        if(location.state.room !== undefined){
            setRoom(location.state.room)
            const room = location.state.room
            const name = location.state.name
            socket.emit('join', {name, room})
            socket.emit('get users')
            return () => {
                socket.emit('leave room')
            } 
        } else {
           history.push('/home')
        }

    }, [])

    return (
        <div>
            <p>{roomId}</p>
        </div>
    )
}

export default Hash