import  { useContext,useEffect } from "react"
import SharedPiano from '../context/SharedPianoContext'

function KeyMap() {
    let {keymap,setKeyMap,octave} = useContext(SharedPiano) 
    function changeOcta(event) {
        // prop.load()
        if(event.target.selectedIndex < octave) {
            setKeyMap(event.target.value)
        }else {
            alert('cant map to octave not visible')
        }
     }
     return (
         <div>
             <select  value={keymap} onChange={changeOcta}>
                 <option value="octave 0">1 Octave</option>
                 <option value="octave 1">2 Octave</option>
                 <option value="octave 2">3 Octave</option>
                 <option value="octave 3">4 Octave</option>
                 <option value="octave 4">5 Octave</option>
                 <option value="octave 5">6 Octave</option>
                 <option value="octave 6">7 Octave</option>
                 <option value="octave 7">8 Octave</option>
             </select>
         </div>
     )
}

export default KeyMap
