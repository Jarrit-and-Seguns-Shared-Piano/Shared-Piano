import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function DrumMachine({color}) {
    let {octaveCalc,left: position,drum} = useContext(SharedPiano)
    const octavesObj = octaveCalc(drum)
    
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
        {Object.keys(octavesObj.octa).map(keys => {
           return <OctaveRender color={color} keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='drum' key={keys}/>
        })}
        </div>
        </div>
    )
}

export default DrumMachine
 