import guitar from "../samples/guitarAcoustic"
import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'


function GuitarAcoustic() {
    let {octaveCalc} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(guitar)
    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='guitar' key={keys}/>
            })}
        </div>
    )
}  

export default GuitarAcoustic
