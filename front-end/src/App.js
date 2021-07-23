import './App.css';
import Piano from './components/Piano';
import Xylophone from './components/xylophone';
import DrumMachine from './components/drumMachine';
import GuitarAcoustic from './components/guitarAcoustic';
import Flute from './components/flute';
import { useEffect,useState } from "react"
import * as Tone from 'tone'
import socket from './socket'
import keyboard from './keyboard/keyboard'
import Dropdown from './components/dropDown';


function App() {
const [instrument,setInstrument] = useState('piano')
  useEffect(() => {
    socket.on('play sound', function(body) {
      console.log(body)
      const sampler = new Tone.Sampler({
          
          urls: {
              A1: body
          },
          onload: () => {
            // console.log('receiver')
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
  );
}

export default App;

