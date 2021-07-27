import '../App.css';
import Piano from './Piano';
import Xylophone from './xylophone';
import DrumMachine from './DrumMachine';
import GuitarAcoustic from './guitarAcoustic';
import Flute from './flute';
import { useEffect,useState } from "react"
import * as Tone from 'tone'
import socket from '../socket'
import keyboard from '../keyboard/keyboard'
import Dropdown from './dropDown';
import { Link } from 'react-router-dom'
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'
import OctaveDrop from './OctaveDrop'; 
import Violin from './Violin';
import Organ from './Organ';


function PianoPage(){
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState([])
  const [instrument,setInstrument] = useState('piano')
  const {volume,setVolume,setOctave,octave} = useContext(SharedPiano)

  useEffect(() => {
    const data = new URLSearchParams(window.location.search)
    const {name, room} = Object.fromEntries(data.entries())

    setName(name)
    setRoom(room)
    
    socket.emit('join', {name, room})
    socket.emit('get users')
    return () => {
      socket.emit('leave room')
    }
  }, [])

  useEffect(() => {
    socket.on('play sound', function(body) {
      const sampler = new Tone.Sampler({
          urls: {
              A1: body
          },
          onload: () => {
              sampler.volume.value = volume;
              sampler.triggerAttackRelease( "A1", 1);
          }
      }).toDestination();
    })
  }, [volume])

  useEffect(() => {
    socket.on('get users', ({users}) => {
      setUsers(users)
    })
  }, [])

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     keyboard(e.key)
  //   })
  // },[])

  return (
  <div>
    <div>
    {users.map((users, i) => <li>{users.name}</li>)}
    </div>
  {instrument === 'piano' ?
    <Piano/> : instrument === 'guitarAcoustic' ?
    <GuitarAcoustic/> : instrument === 'drumMachine' ?
    <DrumMachine/> : instrument === 'flute' ?
    <Flute/> : instrument === 'xylophone' ?
    <Xylophone/> : instrument === 'violin' ?
    <Violin/> :
    <Organ/>
  }
    <label htmlFor="volume">Volume: </label>
    <input type="range" id="volume" name="vol" min="-60" max="5" onChange={e => setVolume(e.target.value)} value={volume}></input>
    <Dropdown value={instrument} change={setInstrument}/>
    <Link to={'/'}>
      <button type='submit'>Leave Room</button>
    </Link>
    <OctaveDrop value={octave} change={setOctave}/>
  </div>
  )
}

export default PianoPage