import * as Tone from 'tone'
import socket from '../socket'
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
            e.target.style.backgroundColor = 'lightGray'
        }
    }
    function showClick(event) {
        event.target.style.backgroundColor = prop.color
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
        const body = {
            sound: prop.sound,
            note: prop.note,
            class: prop.buttonClass
        }
        socket.emit('play sound', {body})
    }

    return (
       <button id={prop.note} onClick={e => showClick(e,'green')} onMouseOver={hover} onMouseOut={hover} onMouseDown={(event) =>{ sendSound(event);if(prop.sampler.loaded) {prop.sampler.triggerAttack(prop.keyNote, Tone.now())}}} onMouseUp={() => { if(prop.sampler.loaded) {prop.sampler.triggerRelease(prop.keyNote,Tone.now() + 0.3)}}} className={prop.buttonClass} ></button>
    )
}

export default Button
