import xylophone from "../samples/xylophoneSample"
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'


function Xylophone() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(xylophone)
    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} note={octavesObj.octakey[keys]} sound={octavesObj.octa[keys]} name='piano' key={keys}/>
            })}
        </div>
    )
}

export default Xylophone
