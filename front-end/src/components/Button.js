import * as Tone from 'tone'
import socket from '../socket'

// import  { useContext, useEffect} from "react"
// import SharedPiano from '../context/SharedPianoContext'



function Button(prop) {
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
        socket.emit('play sound', prop.sound)
    }


    return (
       <button onClick={e => showClick(e,'green')} onMouseOver={hover} onMouseOut={hover} onMouseDown={() =>{ sendSound();prop.sampler.triggerAttack(prop.keyNote, Tone.now())}} onMouseUp={() => prop.sampler.triggerRelease(prop.keyNote,Tone.now() + 0.3)} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Button
