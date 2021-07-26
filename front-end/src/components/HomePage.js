import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function HomePage(){
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div>
            <div>
                <input placeholder='Name' type='text' onChange={(event) => setName(event.target.value)}/>  
            </div>
            <div>
                <input placeholder='Room' type='text' onChange={(event) => setRoom(event.target.value)}/>   
            </div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`piano?name=${name}&room=${room}`}>
                <button type='submit'>Join Room</button>
            </Link>
        </div>
    )
}

export default HomePage