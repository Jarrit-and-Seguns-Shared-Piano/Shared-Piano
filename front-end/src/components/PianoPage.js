import '../App.css';
import Piano from './Piano';
import Xylophone from './xylophone';
import DrumMachine from './DrumMachine';
import GuitarAcoustic from './guitarAcoustic';
import Flute from './flute';
import { useEffect,useState } from "react"
import * as Tone from 'tone'
import socket from '../socket'
import Dropdown from './dropDown';
import { Link, useLocation, useHistory } from 'react-router-dom'
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'
import OctaveDrop from './OctaveDrop'; 
import Violin from './Violin';
import Organ from './Organ';
import Users from './Users';
import KeyMap from './KeyMap';
import Hash from './Hash'
import { Button,OverlayTrigger,Tooltip,Form } from 'react-bootstrap';
import ShowNote from './ShowNote';
import KeyError from './KeyError';
// import Chat from './Chat'

function PianoPage(){
  const [instrument,setInstrument] = useState('piano')
  
  // let room

  const {volume,setVolume,setOctave,octave} = useContext(SharedPiano)
  const location = useLocation()
  let history = useHistory()
  if(!location.state){
    history.push('/')
    location.state = {}
    location.state.room = "test"
    location.state.name = "test"
    location.state.color = "#000000"
  }
  console.log(location.state)
    let room = location.state.room
    let name = location.state.name
    let color = location.state.color    


  useEffect(() => {
    socket.emit('join', {name, room, color})
    socket.emit('send message')
    return () => {
    socket.emit('leave room')
    }
  }, [name, room, color])

  useEffect(() => {
    socket.on('play sound', function({body, user}) {
      let sound = body.sound
      const sampler = new Tone.Sampler({
          urls: {
              A1: sound
          },
          onload: () => {
              sampler.volume.value = volume;
              sampler.triggerAttackRelease( "A1", 0.5);
          }
      }).toDestination();
      const btnClass = body.class.split(" ")[2]
      const btnElement = document.getElementsByClassName(btnClass)[0]
      if(btnElement){
        btnElement.style.backgroundColor = user.color
        setTimeout(() => {
          if(body.class.split(" ")[1] === "sharp"){
            btnElement.style.backgroundColor = "black"
          } else {
            btnElement.style.backgroundColor = "white"          
          }
        }, 400)  
      }
    })
    
  }, [volume])

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to leave room 
    </Tooltip>
  );

  return (
    <>
      <div className='topAction'>
        <Hash/>    
        <Users color={color}/>
        <ShowNote/> 
      </div>
      {/* <div>
        <Chat color={color}/>
      </div>       */}
      <div id="features">
        {instrument === 'piano' ?
          <Piano color={color}/>: instrument === 'guitarAcoustic' ?
          <GuitarAcoustic color={color}/> : instrument === 'drumMachine' ?
          <DrumMachine color={color}/> : instrument === 'flute' ?
          <Flute color={color}/> : instrument === 'xylophone' ?
          <Xylophone color={color}/> : instrument === 'violin' ?
          <Violin color={color}/> :
          <Organ color={color}/>
        }
        <KeyError/>
      </div>
    <div className="options">
      <Dropdown value={instrument} change={setInstrument}/>
      <OctaveDrop style={{paddingBottom: "0px"}}value={octave} change={setOctave} />
      <Link to={'/'}>
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="danger" type='submit'>Leave Room</Button>
        </OverlayTrigger>
      </Link>
      <KeyMap/>
      <div>
        <Form.Label>Volume:</Form.Label>
        <Form.Range id="volume" name="vol" min="-60" max="5" onChange={e => setVolume(e.target.value)} value={volume} />
      </div>
    </div>
  </>
  )
}

export default PianoPage