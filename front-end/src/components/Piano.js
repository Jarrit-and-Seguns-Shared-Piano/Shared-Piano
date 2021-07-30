import piano from '../samples/pianoSample'
import  { useContext,useEffect} from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'



function Piano() {
    // load()
    // console.log('hello yall')
    let {octaveCalc,keymap} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(piano)
    //  console.log(Object.keys(octavesObj.octa).length,Number(keymap[keymap.length - 1]) + 1)
    //  if(Number(keymap[keymap.length - 1]) + 1 > Object.keys(octavesObj.octa).length) {
    //     console.log('too long')
    //  }
    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} name='piano' note={octavesObj.octakey[keys]} key={keys}/>
            })}
        </div>
    )
}

export default Piano
