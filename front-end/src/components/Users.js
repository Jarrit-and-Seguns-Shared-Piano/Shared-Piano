import { useEffect,useState } from "react"
import socket from '../socket'


function Users({ color }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('get users', ({ users }) => {
        setUsers(users)
        })        
    }, [])
    
    return (
        <div id="users">
            <h1 id="userList">Users</h1>
            <ul id='users_list'>
                {users.map((users, i) => <li style={{color: color}} className='users' key={i}>{users.name}</li>)}
            </ul>
        </div>
    )
}

export default Users
