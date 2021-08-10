import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'
// import { Spinner} from 'react-bootstrap';
function ShowNote() {
   
    let {note,load} = useContext(KeyNote)

        return (
            <div id="lastNote">
                <h1 id="noteHeading">Last note</h1>
                <p id='noteDisplay'>
                    { load ? '...' : note }
                    </p>
            </div>
        )
    
}
// export {update}
export default ShowNote
