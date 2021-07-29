import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'
import flute from '../samples/fluteSample'

function Flutes() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(flute)
    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='flute' key={keys}/>
            })}
        </div>
    )
}

export default Flutes
