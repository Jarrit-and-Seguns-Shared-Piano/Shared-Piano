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
    // const load = console.log(sampler.loaded)
    // if(load) {
    //     console.log('dvfdss')
    // }
    // console.log(sampler.loaded)
    useEffect(() => {
        if(Number(keymap[keymap.length - 1]) + 1 > Object.keys(keyOct.octa).length) {
            alert('keyboard octave too high for selected instrument')
            keymap = 'octave 0'
            // setKeyMap('octave 0')
        }
        // console.log(octaveNub,Number(keymap[keymap.length - 1]) + 1)
        const octaveKey = keyOct.octakey[keymap]
        const notes = []
        octaveKey.forEach(keyword => {
            let string = keyword.replace('.','')
            notes.push(string.replace('s','#'))
        })
        const down = (e) => {
            keyboard(e,sampler,notes,sound,keymap)
            }
        const up = (e) => {
            keyboard(e,sampler,notes,sound,keymap)
            }
        document.addEventListener('keydown', down,false)
        document.addEventListener('keyup', up,false)
        return () => {
            document.removeEventListener('keydown', down);
            document.removeEventListener('keyup', up);
        }
    },[volume,keymap,sampler]) 

    let counter = 0
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
                        return <Button key={i} color={color} sampler={sampler} keyNote={string} sound={keys} buttonClass={`${name} ${octavePos[counter -1]}`} note={string}/> 
                })}
                
            </div>
        )
    
}

export default OctaveRender
