import * as Tone from 'tone'
import socket from '../socket'
import  { useContext, useEffect} from "react"
import SharedPiano from '../context/SharedPianoContext'



function Button(prop) {
    let {volume,sampler} = useContext(SharedPiano) 

  
    
    let trigger = () => {
        socket.emit('play sound', prop.sound)
        sampler = new Tone.Sampler({
            urls: {
                A1: prop.sound
            },
            onload: () => {
               
                // const now = Tone.now()
                sampler.volume.value = volume;
             
                    // sampler.triggerAttack( "A1", now)
                    // sampler.triggerRelease( "A1", now + 1)
            }
            ,onerror: console.log
        }).toDestination();
        
    }

    // useEffect(() => {
    //    trigger() 
    // }, [])

    return (
       <button onMouseDown={() => sampler.triggerAttack("A1", Tone.now())} onMouseUp={() => sampler.triggerRelease("A1",Tone.now() + 0.3)} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Button
