import * as Tone from 'tone'
import socket from '../socket'

function Button(prop) {
    

    const trigger = () => {
        socket.emit('play sound', prop.sound)

        const sampler = new Tone.Sampler({
            urls: {
                A1: prop.sound
            },
            onload: () => {
                sampler.triggerAttackRelease( "A1", 1);
            }
        }).toDestination();
        
    }
    return (
       <button onClick={trigger} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Button
