import Violins from '../samples/violinSample'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function Violin() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(Violins)
    return (
        <div className="board">
            {Object.keys(octavesObj).map(keys => {
               return <OctaveRender octave={keys} sound={octavesObj[keys]} name='violin' key={keys}/>
            })}
        </div>
    )
}

export default Violin
