import drum from '../samples/drumMachine'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function DrumMachine() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(drum)
    return (
        <div className="board">
        {Object.keys(octavesObj).map(keys => {
           return <OctaveRender octave={keys} sound={octavesObj[keys]} name='drum' key={keys}/>
        })}
        </div>
    )
}

export default DrumMachine
