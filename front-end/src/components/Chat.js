import { useState, useEffect } from "react"
import socket from "../socket"

function Chat({color}){
    const [message, setMessage] = useState("")
    const [newMessages, setNewMessages] = useState([])

    function sendMessage(e){
        e.preventDefault()
        socket.emit('send message', message)
        setMessage("")
    }

    useEffect(() => {
        socket.on('receive message', ({messages}) => {
            setNewMessages(messages)
        })
    }, [])
    console.log(newMessages)
    return (
        <>
        <ul>
            {newMessages.map(newmessage => {
                if(newmessage.color === color){
                    return <div><li className="messages" style={{color: newmessage.color}}>{newmessage.message}</li></div>
                } else {
                    return <li className="messages" style={{color: newmessage.color}}><span>{newmessage.name} - </span>{newmessage.message}</li>
                }
            })}
        </ul>        
        <form  onSubmit={(e) => sendMessage(e)}>
            <input id="message input" value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            <button type='submit'>Submit</button>
        </form>

        </>
    )
}

export default Chat