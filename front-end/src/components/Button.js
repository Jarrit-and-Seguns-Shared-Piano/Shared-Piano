import * as Tone from 'tone'
import socket from '../socket'

// import  { useContext, useEffect} from "react"
// import SharedPiano from '../context/SharedPianoContext'



function Button(prop) {
    // let {volume} = useContext(SharedPiano) 
 
    // prop.sampler.volume.value = volume
    //    const sampler = trigger(prop)

 
    const sendSound = () => {
        socket.emit('play sound', prop.sound)
    }


    return (
       <button  onMouseDown={() =>{ sendSound();prop.sampler.triggerAttack(prop.keyNote, Tone.now())}} onMouseUp={() => prop.sampler.triggerRelease(prop.keyNote,Tone.now() + 0.3)} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Button
