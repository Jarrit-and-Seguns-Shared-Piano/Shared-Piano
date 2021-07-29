import drum from '../samples/drumMachine'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function DrumMachine() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(drum)
    console.log(octavesObj)
    return (
        <div className="board">
        {Object.keys(octavesObj.octa).map(keys => {
            console.log(keys)
           return <OctaveRender keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='drum' key={keys}/>
        })}
        </div>
    )
}

export default DrumMachine
 