import { useEffect,useState } from "react"
import socket from '../socket'


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('get users', ({ users }) => {
        setUsers(users)
        })        
    }, [])
    
    return (
        <ul>
            {users.map((users, i) => <li key={i}>{users.name}</li>)}
        </ul>
    )
}

export default Users
