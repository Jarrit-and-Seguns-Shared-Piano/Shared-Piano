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

function PianoPage(){
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [instrument,setInstrument] = useState('piano')

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

  }, [window.location.search])

  useEffect(() => {
    socket.on('play sound', function(body) {
      const sampler = new Tone.Sampler({
          urls: {
              A1: body
          },
          onload: () => {
              sampler.volume.value = -12;
              sampler.triggerAttackRelease( "A1", 1);
          }
      }).toDestination();
    })
  }, [])

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
    <Dropdown value={instrument} change={setInstrument}/>
  </div>
  )
}

export default PianoPage