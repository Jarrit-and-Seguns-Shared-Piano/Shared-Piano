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
import { Link } from 'react-router-dom'
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'
import OctaveDrop from './OctaveDrop'; 
import Violin from './Violin';
import Organ from './Organ';
import Users from './Users';
import KeyMap from './KeyMap';
import Hash from './Hash'

function PianoPage(){
  const [instrument,setInstrument] = useState('piano')
  const {volume,setVolume,setOctave,octave,loading} = useContext(SharedPiano)
  
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

  return (
  <div className="features">
    <Hash/>
    <Users/>
    <div id="loading" style={{ backgroundColor: 'red'}}>
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
    <div>
      <label htmlFor="volume">Volume: </label>
      <input type="range" id="volume" name="vol" min="-60" max="5" onChange={e => {loading();setVolume(e.target.value)}} value={volume}></input>
    </div>
      <Dropdown value={instrument} change={setInstrument} load={loading}/>
      <Link to={'/'}>
        <button type='submit'>Leave Room</button>
      </Link>
      <OctaveDrop value={octave} change={setOctave} load={loading}/>
      <KeyMap/>
    </div>
  </div>
  )
}

export default PianoPage