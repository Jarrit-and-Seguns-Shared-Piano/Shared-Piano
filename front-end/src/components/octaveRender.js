import Button from './Button';
import sample from './Samples';
import  { useContext,useEffect } from "react"
import SharedPiano from '../context/SharedPianoContext'
import keyboard from '../keyboard/keyboard';
const octavePos = ['flat','sharp','flat','sharp','flat','flat','sharp','flat','sharp','flat','sharp','flat']


function OctaveRender({octave,sound,name,note,keyOct}) {
    let {volume} = useContext(SharedPiano) 
    // console.log(loading)
    const notes = {}
    sound.forEach((keyNote,i) => {
        let string = note[i].replace('.','')
        notes[string.replace('s','#')] = keyNote
    })
    
    const sampler = sample(notes,volume)

    useEffect(() => {
        const octaveKey = keyOct.octakey['octave 0']
        const notes = []
        octaveKey.forEach(keyword => {
            let string = keyword.replace('.','')
            notes.push(string.replace('s','#'))
        })
        const down = (e) => {
            keyboard(e,sampler,notes,sound)
            }
        const up = (e) => {
            keyboard(e,sampler,notes,sound)
            }
        document.addEventListener('keydown', down,false)
        document.addEventListener('keyup', up,false)
        return () => {
            document.removeEventListener('keydown',down);
            document.removeEventListener('keyup',up);
        }
    },[volume])

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
                        return <Button key={i} sampler={sampler} keyNote={string} sound={keys} buttonClass={`${name} ${octavePos[counter -1]}`} note={string}/> 
                })}
                
            </div>
        )
    
}

export default OctaveRender
