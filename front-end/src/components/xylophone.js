import xylophone from "../samples/xylophoneSample"
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'


function Xylophone({color}) {
    let {octaveCalc,left: position} = useContext(SharedPiano)
    const octavesObj = octaveCalc(xylophone)
    console.log(octavesObj)
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender color={color} keyOct={octavesObj} octave={keys} note={octavesObj.octakey[keys]} sound={octavesObj.octa[keys]} name='xylophone' key={keys}/>
            })}
            </div>
        </div>
    )
}

export default Xylophone
