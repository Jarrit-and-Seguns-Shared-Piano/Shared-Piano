import Button from './Button';
import sample from './Samples';
import  { useContext,useEffect } from "react"
import SharedPiano from '../context/SharedPianoContext'
import keyboard from '../keyboard/keyboard';

const octavePos = ['flat','sharp','flat','sharp','flat','flat','sharp','flat','sharp','flat','sharp','flat']


function OctaveRender({octave,sound,name,note,keyOct, color}) {
    let {volume,keymap} = useContext(SharedPiano) 
    const notes = {}
    sound.forEach((keyNote,i) => {
        let string = note[i].replace('.','')
        notes[string.replace('s','#')] = keyNote
    })
  
    const sampler = sample(notes,volume)
   
    useEffect(() => {
        if(Number(keymap[keymap.length - 1]) + 1 > Object.keys(keyOct.octa).length) {
            keymap = 'octave 0'
        }
        const octaveKey = keyOct.octakey[keymap]
        const notes = []
        octaveKey.forEach(keyword => {
            let string = keyword.replace('.','')
            notes.push(string.replace('s','#'))
        })
        const down = (e) => {
            keyboard(e,sampler,notes,sound,keymap,color)
            }
        const up = (e) => {
            keyboard(e,sampler,notes,sound,keymap,color)
            }
        document.addEventListener('keydown', down,false)
        document.addEventListener('keyup', up,false)
        return () => {
            document.removeEventListener('keydown', down);
            document.removeEventListener('keyup', up);
        }
    },[volume,keymap,sampler]) 

    let counter = 0
    let noteKey = 0
    let curentOct = Number(octave[octave.length - 1])
    switch (curentOct) {
        case 1:
            noteKey = 12
            break;
        case 2:
            noteKey = 24
            break;
        case 3:
            noteKey = 36
            break;
        case 4:
            noteKey = 48
            break;
        case 5:
            noteKey = 60
            break;
        case 6:
            noteKey = 72
            break;
        case 6:
            noteKey = 84
            break;
        default:
            break;
    }
  
        return (    
            <div className={octave}>
                  { sound.map((keys,i) => {
                       let string = note[i].replace('.','')
                       string = string.replace('s','#')
                        if(counter <= 11) {
                            counter++
                        }else {
                            counter = 1
                        }
                        noteKey++
                        return <Button key={i} color={color} sampler={sampler} keyNote={string} sound={keys} buttonClass={`${name} ${octavePos[counter -1]} note${noteKey}`} note={string}/> 
                })}
                
            </div>
        )
   
 
}

export default OctaveRender
