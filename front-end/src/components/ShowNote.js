import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'

function ShowNote() {
    let {note} = useContext(KeyNote)
    return (
        <div id="lastNote">
            <h1 id="noteHeading">Last note</h1>
            <p id='noteDisplay'>{note}</p>
        </div>
    )
}
// export {update}
export default ShowNote
