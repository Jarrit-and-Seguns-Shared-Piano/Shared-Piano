import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'


function GuitarAcoustic({color}) {
    let {octaveCalc,left: position,guitar} = useContext(SharedPiano)
    const octavesObj = octaveCalc(guitar)
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender color={color} keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='guitar' key={keys}/>
            })}
            </div>
        </div>
    )
}  

export default GuitarAcoustic
