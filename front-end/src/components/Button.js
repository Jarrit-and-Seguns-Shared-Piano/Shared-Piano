import * as Tone from 'tone'
import socket from '../socket'
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'

function Button(prop) {
    const {volume} = useContext(SharedPiano) 

    
    const trigger = () => {
        socket.emit('play sound', prop.sound)

        const sampler = new Tone.Sampler({
            urls: {
                A1: prop.sound
            },
            onload: () => {
                // console.log(release)
                const now = Tone.now()
                sampler.volume.value = volume;
             
                    sampler.triggerAttack( "A1", now)
                    sampler.triggerRelease( "A1", now + 1)
                
              
            }
        }).toDestination();
        
    }
  

    return (
       <button onMouseDown={() => trigger()} onMouseUp={() => trigger()} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Button
