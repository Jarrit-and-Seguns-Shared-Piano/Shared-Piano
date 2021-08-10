import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'
import { Spinner} from 'react-bootstrap';
function ShowNote() {
   
    let {note,load} = useContext(KeyNote)
    if(load) {
        return <Spinner animation="border" />
    }else {
        return (
            <div id="lastNote">
                <h1 id="noteHeading">Last note</h1>
                <p id='noteDisplay'>{note}</p>
            </div>
        )
    }
}
// export {update}
export default ShowNote
