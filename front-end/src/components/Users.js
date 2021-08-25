import { useEffect,useState,useRef } from "react"
import socket from '../socket'

function Users({ color }) {
    const [users, setUsers] = useState([])
    const messageEl = useRef(null)
    const messageEl2 = useRef(null)
    useEffect(() => {
        socket.on('get users', ({ users }) => {
        setUsers(users)
        })        
    }, [])
    useEffect(() => {
        if (messageEl.current) {
          messageEl.current.scrollTop = messageEl.current.scrollHeight
          setTimeout(function(){
            messageEl.current.scrollTop = 0;
          }, 1000);
        }
      }, [messageEl.current])
      useEffect(() => {
        if (messageEl2.current) {
          const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                  if( messageEl.current) {
                  messageEl.current.scrollTop = messageEl.current.scrollHeight
                  setTimeout(function(){
                    messageEl.current.scrollTop = 0;
                  }, 1000);
                }
                }
            }
        };
          const config = { childList: true, subtree: true }
          const observer = new MutationObserver(callback);
          observer.observe(messageEl2.current, config);
        }
      }, [messageEl2.current])
    return (
        <div id="users" ref={messageEl}>
            <h1 id="userList">Users</h1>
            <div id='users_list' ref={messageEl2}>
                {users.map((users, i) => {
                    if(users.color === color) {
                         return <div style={{color: users.color}} className='users' key={users.id}><span key={i} style={{color: 'black'}}>Current: </span>{users.name}</div> 
                    }else {
                        return <div style={{color: users.color}} className='users' key={users.id}>{users.name}</div>
                    }
               })}
            </div>
        </div>
    )
}

export default Users
