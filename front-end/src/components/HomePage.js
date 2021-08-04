import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socket from '../socket'
import Form from 'react-bootstrap/Form'
import { Button,OverlayTrigger,Tooltip } from 'react-bootstrap';

function HomePage(){
    const [name, setName] = useState('')
    const [joinName, setJoinName] = useState('')
    const [room, setRoom] = useState('')
    const [dupName, setDupName] = useState(false)

    useEffect(() => {
        socket.emit('check names', { joinName, room })
    }, [joinName, room])

    useEffect(() => {
        socket.on('check names', function({ foundName, foundRoom }){
            if(!foundName && foundRoom){
                setDupName(true)
            } else {
                setDupName(false)
            }
        })
    }, [])

    function Hash(length){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }
        return result
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to join room. Duplicate name can't join the same room
        </Tooltip>
      );

    return (
        <div id="heading">
            <div className="profile">
                <img className="team_pictures" src="/Jarrit.png"/>
                <h3>Jarrit Alicea</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="text_container">
                <div id="title">
                    <h1>Keyboard Hero</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                    <Form.Group id="home_page-inputs">
                        <Form.Control placeholder="User name" type='email' style={{margin:"10px"}} onChange={(event) => setName(event.target.value)}/>  
                    <Link onClick={event => (!name) ? event.preventDefault() : null} to={{pathname: '/piano', state: {name: name, room: Hash(6)}}}>
                        <Button variant="primary" type='submit' style={{margin:"10px"}}>Make Room</Button>
                    </Link>
                    </Form.Group>
                    <Form.Group id="home_page-inputs">
                        <Form.Control placeholder="User name" type='email' style={{margin:"10px"}} onChange={(event) => setJoinName(event.target.value)}/>
                        <Form.Control placeholder="Room code" type='email' style={{margin:"10px"}} onChange={(event) => setRoom(event.target.value)}/>  
                    <Link onClick={event => (!joinName || !room || !dupName) ? event.preventDefault() : null} to={{pathname: '/piano', state: {name: joinName, room: room}}}>   
                    
                    <OverlayTrigger 
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Button variant="primary" type='submit' style={{margin:"10px"}}>Join Room</Button>
                    </OverlayTrigger>
                    </Link>
                    </Form.Group>
            </div>
            <div className="profile">
                <img className="team_pictures" src="/Segun.jpg"/>
                <h3>Segun Subair</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default HomePage