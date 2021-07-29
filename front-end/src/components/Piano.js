import piano from '../samples/pianoSample'
import  { useContext,useEffect} from "react"
import OctaveRender from './octaveRender';
import SharedPiano from '../context/SharedPianoContext'



function Piano({load}) {
    // load()
    console.log('hello yall')
    let {octaveCalc,} = useContext(SharedPiano) 
    const octavesObj = octaveCalc(piano)

    return (
        <div className="board">
            {Object.keys(octavesObj.octa).map(keys => {
               return <OctaveRender keyOct={octavesObj} octave={keys} sound={octavesObj.octa[keys]} name='piano' note={octavesObj.octakey[keys]} key={keys}/>
            })}
        </div>
    )
}

export default Piano
