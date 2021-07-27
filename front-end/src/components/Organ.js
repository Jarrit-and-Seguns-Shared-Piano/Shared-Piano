import organ from '../samples/organSample'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function Organ() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(organ)
    return (
        <div className="board">
            {Object.keys(octavesObj).map(keys => {
               return <OctaveRender octave={keys} sound={octavesObj[keys]} name='organ' key={keys}/>
            })}
        </div>
    )
}

export default Organ
