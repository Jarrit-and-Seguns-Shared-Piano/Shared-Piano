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
import { Link, useLocation } from 'react-router-dom'
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


function PianoPage(){
  // const [note,setNote] = useState(''))
  const [instrument,setInstrument] = useState('piano')
<<<<<<< HEAD
  const {volume,setVolume,setOctave,octave,loading} = useContext(SharedPiano)
  const location = useLocation()
  let room = location.state.room
  let name = location.state.name

  useEffect(() => {
      socket.emit('join', {name, room})
    return () => {
      socket.emit('leave room')
    }
  }, [])

=======
  const {volume,setVolume,setOctave,octave} = useContext(SharedPiano)
  
>>>>>>> ec60607 (fixed crash bug)
  useEffect(() => {
    socket.on('play sound', function(body) {
      const sampler = new Tone.Sampler({
          urls: {
              A1: body
          },
          onload: () => {
              sampler.volume.value = volume;
              sampler.triggerAttackRelease( "A1", 0.5);
          }
      }).toDestination();
    })
  }, [volume])
 
  // useEffect(() => {
  //   socket.on('get users', ({users}) => {
  //     setUsers(users)
  //   })
  // }, [])

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to leave room 
    </Tooltip>
  );

  return (
    <>
      <div className='topAction'>
      <Hash/>
      <Users/>
      <ShowNote/> 
    </div>
  <div id="features">
  {instrument === 'piano' ?
    <Piano />: instrument === 'guitarAcoustic' ?
    <GuitarAcoustic/> : instrument === 'drumMachine' ?
    <DrumMachine/> : instrument === 'flute' ?
    <Flute/> : instrument === 'xylophone' ?
    <Xylophone/> : instrument === 'violin' ?
    <Violin/> :
    <Organ/>
  }
  </div>
  <div className="options">
 

    <Dropdown value={instrument} change={setInstrument}/>
    <OctaveDrop value={octave} change={setOctave} />
    <Link to={'/'}>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
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