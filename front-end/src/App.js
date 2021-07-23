import './App.css';
import io from 'socket.io-client'
import Piano from './components/Piano';
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
        // baseUrl: "https://tonejs.github.io/audio/casio/",
        onload: () => {
          console.log('here')
            sampler.triggerAttackRelease( "A1", 1);
        }
    }).toDestination();
  })

  return (
    <div className="App">
       <Piano/> 
    </div>
  );
}

export default App;

