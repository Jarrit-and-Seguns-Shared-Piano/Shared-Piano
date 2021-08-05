import * as Tone from 'tone'
import socket from '../socket'
// import {update} from './ShowNote'

import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'



function Button(prop) {
    
    let {setNote} = useContext(KeyNote)
    function hover(e) {
        if(e.type === 'mouseout' && e.target.classList[1] === 'sharp') {
            e.target.style.backgroundColor = 'black'
        }else if(e.type === 'mouseout' && e.target.classList[1] === 'flat') {
            e.target.style.backgroundColor = 'white'
        }else {
            e.target.style.backgroundColor = 'blue'
        }
    } 
    function showClick(event,color) {
        event.target.style.backgroundColor = color
        setTimeout(() => {
            if(event.target.classList[1] === 'sharp') {
                event.target.style.backgroundColor = 'black'
               }else {
                event.target.style.backgroundColor = 'white'
               }
        },200)
        
    }
    const sendSound = () => {
          setNote(prop.keyNote)
        socket.emit('play sound', prop.sound)
    }


    return (
       <button onClick={e => showClick(e,'green')} onMouseOver={hover} onMouseOut={hover} onMouseDown={() =>{ sendSound();if(prop.sampler.loaded) {prop.sampler.triggerAttack(prop.keyNote, Tone.now())}}} onMouseUp={() => { if(prop.sampler.loaded) {prop.sampler.triggerRelease(prop.keyNote,Tone.now() + 0.3)}}} className={prop.buttonClass} ></button>
    )
}

export default Button
