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
        <div>
            <span>Users:</span>
            <ul id='users_list'>
                {users.map((users, i) => <li className='users' key={i}>{users.name}</li>)}
            </ul>
        </div>
    )
}

export default Users
