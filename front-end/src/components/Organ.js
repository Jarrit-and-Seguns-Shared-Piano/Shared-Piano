import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'

function Organ({color}) {
    let {octaveCalc,left: position,organ} = useContext(SharedPiano)
    const octavesObj = octaveCalc(organ)
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender color={color} keyOct={octavesObj} octave={keys} note={octavesObj.octakey[keys]} sound={octavesObj.octa[keys]} name='organ' key={keys}/>
            })}
            </div>
        </div>
    )
}

export default Organ
