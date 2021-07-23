import './App.css';
import io from 'socket.io-client'
import Piano from './components/Piano';
import Xylophone from './components/xylophone';
import DrumMachine from './components/drumMachine';
import GuitarAcoustic from './components/guitarAcoustic';
import Flute from './components/flute';
import React from "react"
import * as Tone from 'tone'




export const socket = io.connect('/')

function App() {

  socket.on('play sound', function(body) {
    console.log(body)
    const sampler = new Tone.Sampler({
        
        urls: {
            A1: body
        },
        onload: () => {
          console.log('sound')
           sampler.volume.value = -12;
            sampler.triggerAttackRelease( "A1", 1);
        }
    }).toDestination();
  })

  return (
    <div className="App">
       {/* <Piano/>  */} 
       {/* <Xylophone/> */}
       {/* <DrumMachine/> */}
       {/* <GuitarAcoustic/> */}
       {/* <Flute/> */}
    </div>
  );
}

export default App;

