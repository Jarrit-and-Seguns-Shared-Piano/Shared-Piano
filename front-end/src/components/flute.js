import  { useContext } from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'
import flute from '../samples/fluteSample'

function Flutes({color}) {
    let {octaveCalc,left: position} = useContext(SharedPiano)
    const octavesObj = octaveCalc(flute)
    // console.log(Object.keys(octavesObj.octa).length,Number(keymap[keymap.length - 1]) + 1)
    // if(Number(keymap[keymap.length - 1]) + 1 > Object.keys(octavesObj.octa).length) {
    //     setKeyMap('octave 0')
    // }
    return (
        <div className="board">
            <div className="positionLeft" style={{left: position} }>
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender color={color} keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} note={octavesObj.octakey[keys]} name='flute' key={keys}/>
            })}
            </div>
        </div>
    )
}

export default Flutes
