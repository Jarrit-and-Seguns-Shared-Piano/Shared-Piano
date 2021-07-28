import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socket from '../socket'

function HomePage(){
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [dupName, setDupName] = useState(false)

    useEffect(() => {
        socket.emit('check names', { name, room })
    }, [name, room])

    useEffect(() => {
        socket.on('check names', function({ foundName, foundRoom}){
            if(foundName && foundRoom){
                setDupName(true)
            } else {
                setDupName(false)
            }
        })
    }, [])

    return (
        <div>
            <div>
                <input placeholder='Name' type='text' onChange={(event) => setName(event.target.value)}/>  
            </div>
            <div>
                <input placeholder='Room' type='text' onChange={(event) => setRoom(event.target.value)}/>   
            </div>
            <Link onClick={event => (!name || !room || dupName) ? event.preventDefault() : null} to={`piano?name=${name}&room=${room}`}>
                <button type='submit'>Join Room</button>
            </Link>
        </div>
    )
}

export default HomePage