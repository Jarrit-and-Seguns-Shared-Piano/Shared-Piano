import Violins from '../samples/violinSample'
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function Violin() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(Violins)
    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} note={octavesObj.octakey[keys]} sound={octavesObj.octa[keys]} name='violin' key={keys}/>
            })}
        </div>
    )
}

export default Violin
