import { useState, useEffect } from "react"
import socket from "../socket"

function Chat(){
    const [message, setMessage] = useState("")

    function sendMessage(e){
        e.preventDefault()
        socket.emit('send message', message)
        setMessage("")
    }

    useEffect(() => {
        socket.on('receive message', function({ message, user}){
            console.log(message, user)
        })
    }, [])

    return (
        <form  onSubmit={(e) => sendMessage(e)}>
            <input id="message input" value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Chat