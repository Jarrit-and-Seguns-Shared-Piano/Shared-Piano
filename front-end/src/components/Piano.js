import piano from '../samples/pianoSample'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'


function Piano() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(piano)
    return (
        <div className="board">
            {Object.keys(octavesObj).map(keys => {
               return <OctaveRender octave={keys} sound={octavesObj[keys]} name='piano' key={keys}/>
            })}
        </div>
    )
}

export default Piano
