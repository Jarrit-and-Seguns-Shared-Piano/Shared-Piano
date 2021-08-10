import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Hash() {
    const [roomId, setRoom] = useState('')
    const location = useLocation()

    useEffect(() => {
        setRoom(location.state.room)
    }, [location.state.room])

    return (
        <div>
            <h1 id="roomName">Room Code</h1>
            <p id="roomHash">{roomId}</p>
        </div>
    )
}

export default Hash