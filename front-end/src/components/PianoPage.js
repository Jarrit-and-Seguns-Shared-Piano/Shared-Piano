import '../App.css';
import Piano from './Piano';
import Xylophone from './xylophone';
import DrumMachine from './drumMachine';
import GuitarAcoustic from './guitarAcoustic';
import Flute from './flute';
import { useEffect,useState } from "react"
import * as Tone from 'tone'
import socket from '../socket'
import keyboard from '../keyboard/keyboard'
import Dropdown from './dropDown';
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'

function PianoPage(){
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [instrument,setInstrument] = useState('piano')
  const {volume,setVolume} = useContext(SharedPiano)

  useEffect(() => {
    const data = new URLSearchParams(window.location.search)
    const {name, room} = Object.fromEntries(data.entries())
    console.log(name, room)

    setName(name)
    setRoom(room)

    socket.emit('join', {name, room})

    return () => {
      socket.emit('disconnect')
      socket.off()
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
    document.addEventListener('keydown', (e) => {
      keyboard(e.key)
    })
  },[])

  return (
  <div className="App">
  {instrument === 'piano' ?
    <Piano/> : instrument === 'guitarAcoustic' ?
    <GuitarAcoustic/> : instrument === 'drumMachine' ?
    <DrumMachine/> : instrument === 'flute' ?
    <Flute/> : 
    <Xylophone/>
  }
    <label htmlFor="volume">Volume: </label>
    <input type="range" id="volume" name="vol" min="-60" max="5" onChange={e => setVolume(e.target.value)} value={volume}></input>
    <Dropdown value={instrument} change={setInstrument}/>
  </div>
  )
}

export default PianoPage