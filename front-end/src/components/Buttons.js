// import * as Tone from 'tone'
// import io from 'socket.io-client'
import { socket } from '../App'

function Buttons(prop) {
    

    const trigger = () => {
        socket.emit('play sound', prop.sound)
        // const pianoSamples = new Tone.ToneAudioBuffers({
        //     A1: sound.B1,
        //     A2: sound.A2,
        // }, () => {
        //     console.log(pianoSamples)
        //     const player = new Tone.Player().toDestination();
        //     // play one of the samples when they all load
        //     player.buffer = pianoSamples.get("A1");
        //     const now = Tone.now()
        //     player.start(now,0,now + 1);
        // });
        // const buffer = new Tone.ToneAudioBuffer(prop.sound, () => {
        //     const player = new Tone.Player().toDestination();
        //     //     // play one of the samples when they all load
        //     console.log(buffer)
        //         player.buffer = buffer
        //         const now = Tone.now()
          
        //         player.start(now,0,now + 0.5);
        // });
        // const sampler = new Tone.Sampler({
            
        //     urls: {
        //         A1: prop.sound
        //     },
        //     // baseUrl: "https://tonejs.github.io/audio/casio/",
        //     onload: () => {
        //         sampler.triggerAttackRelease( "A1", 1);
        //     }
        // }).toDestination();
        // const player = new Tone.Player(prop.sound).toDestination();
        // player.buffer = player
        //  player.autostart = true;
        //  const now = Tone.now()
        //  player.stop(now + 1)
    }
    return (
       <button onClick={trigger} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Buttons
