import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'
import flute from '../samples/fluteSample'

function Flutes() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(flute)
    return (
        <div className="board">
            {Object.keys(octavesObj).map(keys => {
               return <OctaveRender octave={keys} sound={octavesObj[keys]} name='flute' key={keys}/>
            })}
        </div>
    )
}

export default Flutes
