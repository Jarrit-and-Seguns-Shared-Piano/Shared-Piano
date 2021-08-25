import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'



function Piano({color}) {
    let {octaveCalc,left: position,piano} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(piano)
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender color={color} keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} name='piano' note={octavesObj.octakey[keys]} key={keys}/>
            })}
            </div>
        </div>
    )
}

export default Piano
