import { useState } from 'react'
import SharedPianoContext from './SharedPianoContext'


function SharedPiano(props) {
     const [volume,setVolume] = useState(-12)
     const [octave,setOctave] = useState(2)
     const [currentMax,setCurrentMax] = useState(0)

     const octaveCalc = (soundObj) => {
        let octaves = Math.floor(Object.keys(soundObj).length / 12)
        if(octave - 1 <= octaves) {
            octaves = octave - 1
        }
        const keys = Object.values(soundObj)
        const keyNote = Object.keys(soundObj)
        const octavesObj = {
            octa: {},
            octakey: {}
        }
        for(let i = 0 ; i <= octaves; i++) {
            octavesObj.octa[`octave ${i}`] = []
            octavesObj.octakey[`octave ${i}`] = []
            if(i === octaves && keys.length < 12) {
                octavesObj.octa[`octave ${i}`] = keys
                octavesObj.octakey[`octave ${i}`] = keyNote
            }else {
               for(let y = 0; y < 12 ;y++) {
                    octavesObj.octa[`octave ${i}`].push(keys.shift())
                    octavesObj.octakey[`octave ${i}`].push(keyNote.shift())
                }
            }        
        }
        // console.log(octavesObj,'here')
        return octavesObj;
     }
     const [keymap,setKeyMap] = useState('octave 0')

     const value = {
         volume,
         setVolume,
         octaveCalc,
         octave,
         setOctave,
         keymap,
         setKeyMap,
         currentMax,
         setCurrentMax
     }

    return (
        <SharedPianoContext.Provider value={value}>
        {props.children}
      </SharedPianoContext.Provider>
    )
}
export default SharedPiano