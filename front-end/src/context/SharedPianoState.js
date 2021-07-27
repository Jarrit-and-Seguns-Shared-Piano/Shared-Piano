import { useState } from 'react'
import SharedPianoContext from './SharedPianoContext'
import * as Tone from 'tone'

function SharedPiano(props) {
    const [volume,setVolume] = useState(-12)

    let sampler = new Tone.Sampler({
        urls: {
            A1: 'https://tonejs.github.io/audio/berklee/gong_1.mp3'
        },
        onload: () => {

            sampler.volume.value = volume;
         
                // sampler.triggerAttack( "A1", now)
                // sampler.triggerRelease( "A1", now + 1)
        }
    }).toDestination();
    
     const [octave,setOctave] = useState(2)
     const octaveCalc = (soundObj) => {
        let octaves = Math.floor(Object.keys(soundObj).length / 12)
        if(octave - 1 <= octaves) {
            octaves = octave - 1
        }
        const keys = Object.values(soundObj)
        const octavesObj = {}
        for(let i = 0 ; i <= octaves; i++) {
            octavesObj[`octave ${i}`] = []
            if(i === octaves && keys.length < 12) {
                octavesObj[`octave ${i}`] = keys
            }else {
               for(let y = 0; y < 12 ;y++) {
                    octavesObj[`octave ${i}`].push(keys.shift())
                }
            }        
        }
        return octavesObj;
     }
     const value = {
         volume,
         setVolume,
         sampler,
         octaveCalc,
         octave,
         setOctave
     }

  

    
    return (
        <SharedPianoContext.Provider value={value}>
        {props.children}
      </SharedPianoContext.Provider>
    )
}
export default SharedPiano