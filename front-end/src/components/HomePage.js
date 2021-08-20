import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socket from '../socket'
import Form from 'react-bootstrap/Form'
import { Button,OverlayTrigger,Tooltip,Image } from 'react-bootstrap';
import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'

function HomePage(){
    let {randomColor} = useContext(KeyNote)
    const [name, setName] = useState('')
    const [joinName, setJoinName] = useState('')
    const [room, setRoom] = useState('')
    const [dupName, setDupName] = useState(false)
    const [color, setColor] = useState(`#${randomColor}`)
  
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

    function showMakeRoom(){
        document.getElementById('nav-make-room-tab').className = 'nav-link active'
        document.getElementById('nav-join-room-tab').className = 'nav-link'
        document.getElementById('nav-make-room').className = 'tab-pane fade show active'
        document.getElementById('nav-join-room').className = 'tab-pane fade'
    }

    function showJoinRoom(){
        document.getElementById('nav-join-room-tab').className = 'nav-link active'
        document.getElementById('nav-make-room-tab').className = 'nav-link'
        document.getElementById('nav-join-room').className = 'tab-pane fade show active'
        document.getElementById('nav-make-room').className = 'tab-pane fade'
    }
    return (
        <div id="heading">
            <div className="profile">
                <img className="team_pictures" src="/Jarrit.png" alt="Jarrit Alicea"/>
                <h3>Jarrit Alicea</h3>
                <p>Utilizing Socket.IO we can communicate between a server we made and any clients that interact with this app. When certain events happen on the app we can send a signal to our server that tells it to perform some type of activity. Whether that be adding a user and their credentials to a room, removing and deleting users when they leave, or sending sounds so only users in the same room can hear each other.</p>
            </div>
            <div id="text_container" style={{ height: '140%'}}>
                <div id="title">
                <Image src="/favicon.png"  alt="logo" rounded />
                    <h1>Keyboard Hero</h1>
                    <p>Keyboard Hero is an interactive and collaborative online keyboard made using Tone.js, a Web Audio framework for creating interactive music in the browser, and Socket.IO to enable real-time, bidirectional event-based communication</p>
                </div>
                <div id="input_container">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button onClick={() => showMakeRoom()} className="nav-link active" id="nav-make-room-tab" data-bs-toggle="tab" data-bs-target="#nav-make-room" type="button" role="tab" aria-controls="nav-make-room" aria-selected="true">Make Room</button>
                            <button onClick={() => showJoinRoom()} className="nav-link" id="nav-join-room-tab" data-bs-toggle="tab" data-bs-target="#nav-join-room" type="button" role="tab" aria-controls="nav-join-room" aria-selected="false">Join Room</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-make-room" role="tabpanel" aria-labelledby="nav-make-room">
                            <form>
                                <Form.Group id="home_page-inputs">
                                    <Form.Control placeholder="User name" type='email' style={{margin:"10px"}} onChange={(event) => setName(event.target.value)}/>
                                    <span>User Color:</span>
                                    <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
                                    <Link onClick={event => (!name) ? event.preventDefault() : null} to={{pathname: '/piano', state: {name: name, room: Hash(6), color:color}}}>
                                        <Button variant="primary" type='submit' style={{margin:"10px"}}>Make Room</Button>
                                    </Link>
                                </Form.Group>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="nav-join-room" role="tabpanel" aria-labelledby="nav-join-room">
                            <form>
                                <Form.Group id="home_page-inputs">
                                    <Form.Control placeholder="User name" type='email' style={{margin:"10px"}} onChange={(event) => setJoinName(event.target.value)}/>
                                    <Form.Control placeholder="Room code" type='email' style={{margin:"10px"}} onChange={(event) => setRoom(event.target.value)}/>
                                    <span>User Color:</span>
                                    <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/> 
                                    <Link onClick={event => (!joinName || !room || !dupName || !color) ? event.preventDefault() : null} to={{pathname: '/piano', state: {name: joinName, room: room, color: color}}}>
                                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                            <Button variant="primary" type='submit' style={{margin:"10px"}}>Join Room</Button>
                                        </OverlayTrigger>
                                    </Link>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile">
                <img className="team_pictures" src="/Segun.jpg" alt="Segun Subair"/>
                <h3>Segun Subair</h3>
                <p> Tone.js library was used to trigger the sound played when a button is clicked on the screen or a key is pressed on the keyboard. Tone.js sampler was used to load the sound samples. The sampler method loaded was used to improve user experience by making the buttons playable only when the sound is loaded. Each instrument has different octaves users can switch to. I also implemented the ability to switch keyboard octave users can map to whichever octave they want if available.</p>
            </div>
        </div>
    )
}

export default HomePage