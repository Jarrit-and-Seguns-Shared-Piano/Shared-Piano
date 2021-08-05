import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Hash() {
    const [roomId, setRoom] = useState('')
    const location = useLocation()

    useEffect(() => {
        setRoom(location.state.room)
    }, [])

    return (
        <div>
            <span>Room Code:</span>
            <p>{roomId}</p>
        </div>
    )
}

export default Hash