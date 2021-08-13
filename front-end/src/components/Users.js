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
                {users.map((users, i) => {
                    if(users.color === color) {
<<<<<<< HEAD
                         return <li style={{color: users.color}} className='users' key={users.id}><span key={i} style={{color: 'black'}}>Current: </span>{users.name}</li> 
=======
                         return <li style={{color: users.color}} className='users' key={users.id}><span key={i} style={{color: 'black'}}>User: </span>{users.name}</li> 
                                
                
>>>>>>> 3e5f8ae (finishing touches)
                    }else {
                        return <li style={{color: users.color}} className='users' key={users.id}>{users.name}</li>
                    }
               })}
            </ul>
        </div>
    )
}

export default Users
