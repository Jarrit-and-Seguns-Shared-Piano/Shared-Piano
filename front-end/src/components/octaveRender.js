import Button from './Button';
import sample from './Samples';
import  { useContext,useEffect,useState } from "react"
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
            console.log('how')
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
    if(curentOct === 1) {
      noteKey = 12
    }else if(curentOct === 2) {
        noteKey = 24
    }else if(curentOct === 3) {
        noteKey = 36
    }else if(curentOct === 4) {
        noteKey = 48
    }else if(curentOct === 5) {
        noteKey = 60
    }else if(curentOct === 6) {
        noteKey = 72
    }else if(curentOct === 7) {
        noteKey = 84
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
